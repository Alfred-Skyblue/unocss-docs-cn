export function useComponents(app) {
  console.log('-> app', app)
  const comp = import.meta.glob('./components/**/*.vue', { eager: true })
  Object.entries(comp).forEach(([path, component]) => {
    const name = path.split('/').pop().replace('.vue', '')
    console.log('-> name', name, component.default)
    app.component(name, component.default)
  })
}
