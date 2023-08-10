export function useComponents(app) {
  const comp = import.meta.glob('./components/**/*.vue', { eager: true })
  Object.entries(comp).forEach(([path, component]) => {
    const name = path.split('/').pop().replace('.vue', '')
    app.component(name, component.default)
  })
}
