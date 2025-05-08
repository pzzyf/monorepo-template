import { reactive, readonly } from 'vue'
import { defaultPreferences } from './config'

class PreferencesManager {
  private state = reactive({
    ...this.loadPreferences(),
  })

  constructor() {}

  public getPreferences() {
    return readonly(this.state)
  }

  private loadPreferences() {
    return { ...defaultPreferences }
  }
}

const preferencesManager = new PreferencesManager()

export { PreferencesManager, preferencesManager }
