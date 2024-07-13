type Coordinate = { x?: number; y?: number };

export function RadialGradient({
  position,
  translate,
  scale = 1,
}: {
  position?: Coordinate;
  translate?: Coordinate;
  scale?: number;
}) {
  const calcPos = { x: 0, y: 0, ...position };
  const calcTranslate = { x: 0, y: 0, ...translate };

  return (
    <img
      src="/radialgradient.png"
      className={`pointer-events-none absolute z-[0]`}
      style={{
        top: `${calcPos.y}%`,
        left: `${calcPos.x}%`,
        transform: `translate(${calcTranslate.x}%, ${calcTranslate.y}%)`,
        scale: `${scale}`,
      }}
    />
  );
}
