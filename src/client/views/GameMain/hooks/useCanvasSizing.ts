import { MutableRefObject, useEffect, useState } from 'react';

interface useCanvasSizingProps {
  canvasRef: MutableRefObject<HTMLCanvasElement | null>;
}

export function useCanvasSizing({ canvasRef }: useCanvasSizingProps) {
  const [context, setContext] = useState<
    CanvasRenderingContext2D | null | undefined
  >(null);

  useEffect(() => {
    const canvas = canvasRef?.current;
    setContext(canvas?.getContext('2d'));
    const resizeCanvas = () => {
      if (canvas && context) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas(); // Call the function once to set initial dimensions

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return context;
}
