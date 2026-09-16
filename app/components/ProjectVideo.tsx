'use client';

import { useEffect, useRef, useState } from 'react';

interface ProjectVideoProps {
  src: string;
  poster?: string;
  title: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function ProjectVideo({ src, poster, title, width, height, priority = false }: ProjectVideoProps) {
  const frame = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const frameCallback = useRef<number>();
  const paintCallback = useRef<number>();
  const [active, setActive] = useState(false);
  const [requested, setRequested] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [failed, setFailed] = useState(false);
  const frameWidth = width && width > 0 ? width : 16;
  const frameHeight = height && height > 0 ? height : 9;
  const still = poster || (src.includes('/video/upload/')
    ? src.replace('/video/upload/', '/video/upload/so_0,w_1400,c_limit/q_auto/').replace(/\.[^.]+$/, '.jpg')
    : undefined);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let nearby = false;
    const update = () => {
      const shouldPlay = nearby && !motion.matches;
      if (shouldPlay) setRequested(true);
      setActive(shouldPlay);
    };
    const observer = new IntersectionObserver(([entry]) => {
      nearby = entry.isIntersecting;
      update();
    }, { rootMargin: '300px' });
    if (frame.current) observer.observe(frame.current);
    motion.addEventListener('change', update);
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    let cancelled = false;
    if (active && !failed) {
      element.play().then(() => {
        if (!cancelled) setBlocked(false);
      }).catch(() => {
        if (!cancelled) setBlocked(true);
      });
    } else {
      element.pause();
    }
    return () => { cancelled = true; };
  }, [active, failed]);

  useEffect(() => {
    const element = video.current;
    return () => {
      if (frameCallback.current !== undefined) element?.cancelVideoFrameCallback(frameCallback.current);
      if (paintCallback.current !== undefined) cancelAnimationFrame(paintCallback.current);
    };
  }, []);

  const revealFrame = () => {
    const element = video.current;
    if (!element) return;
    if ('requestVideoFrameCallback' in element) {
      if (frameCallback.current !== undefined) element.cancelVideoFrameCallback(frameCallback.current);
      frameCallback.current = element.requestVideoFrameCallback(() => setPlaying(true));
    } else {
      // Older browsers: allow the playing frame to paint before fading it in.
      if (paintCallback.current !== undefined) cancelAnimationFrame(paintCallback.current);
      paintCallback.current = requestAnimationFrame(() => {
        paintCallback.current = requestAnimationFrame(() => setPlaying(true));
      });
    }
  };

  return (
    <div ref={frame} className="project-media" style={{ aspectRatio: `${frameWidth} / ${frameHeight}` }}>
      {/* Keep a real image beneath the video, including when playback is unavailable. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="project-media-poster" src={still} alt={title}
        width={frameWidth} height={frameHeight}
        loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" />
      <video ref={video} src={requested && !failed ? src : undefined}
        className={`project-media-video${playing ? ' is-playing' : ''}`}
        width={frameWidth} height={frameHeight} poster={still}
        preload={active ? 'auto' : 'none'} playsInline loop muted
        aria-hidden="true"
        onPlaying={revealFrame}
        onError={() => { setFailed(true); setPlaying(false); }} />
      {blocked && !failed && (
        <button className="project-media-play" onClick={() => {
          video.current?.play().then(() => setBlocked(false)).catch(() => setBlocked(true));
        }}>Play video</button>
      )}
    </div>
  );
}
