async function initApplication() {
  const { bootStrap } = await import('./bootstrap')
  bootStrap()
}

initApplication()
