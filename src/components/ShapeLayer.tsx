import type { ShapeDefinition } from '../types'

function Shape({ depth, type, style }: ShapeDefinition) {
  const cls = ['s-shape', type ? `s-shape--${type}` : ''].filter(Boolean).join(' ')
  return <div data-depth={depth} className={cls} style={style} />
}

export default function ShapeLayer({ shapes }: { shapes: ShapeDefinition[] }) {
  return (
    <div className="section-shapes" aria-hidden="true">
      {shapes.map((s, i) => (
        <Shape key={i} depth={s.depth} type={s.type} style={s.style} />
      ))}
    </div>
  )
}
