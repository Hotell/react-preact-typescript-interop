import { ComponentClass, render } from 'preact'

export function mount(Cmp: ComponentClass<any>) {
  const root = document.createElement('div') as HTMLDivElement

  return render(Cmp, root)
}
