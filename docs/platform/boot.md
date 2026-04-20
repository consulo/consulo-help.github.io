# Major boot changes

Consulo consists of two parts:
  * **boot part** (not updatable)
      * .exe files on windows
      * macOS launcher
      * sh script on linux
  * **platform part** (updatable)

Sometimes (not often) major issues reported, which **required changes in boot part**. For update boot part - need only re-download Consulo, and replace it by **new build**.

All settings will be not changed.

List of major boot issues:
* [Platform not updated without admin rights, when Consulo placed under Program Files directory](https://github.com/consulo/consulo/issues/280)
* [After update consulo can't start happen second time](https://github.com/consulo/consulo/issues/256)

# Boot Paths
### Windows
   * **Windows Vista, 7, 8, 8.1, 10:**
      - `${system-drive}/Users/${user-name}/AppData/Roaming/Consulo` - configuration directory
      - `${system-drive}/Users/${user-name}/AppData/Roaming/Consulo Platorm` - platform directory
      - `${system-drive}/Users/${user-name}/AppData/Roaming/Consulo/plugins` - plugin directory
      - `${system-drive}/Users/${user-name}/AppData/Local/Consulo/log` - log directory
   * **Windows XP:**
      - `${system-drive}/Users/${user-name}/Application Data/Consulo/` - configuration directory
      - `${system-drive}/Users/${user-name}/Application Data/Consulo Platform` - platform directory
      - `${system-drive}/Users/${user-name}/Application Data/Consulo/plugins` - plugin directory
      - `${system-drive}/Users/${user-name}/Local Settings/Application Data/Consulo/log` - log directory

### Linux
   *  **Any:**
      - `${home-directory}/.consulo_settings`
          - config - configuration directory
          - config/plugins - plugin directory
          - system/log - log directory

### Mac OS
   * **Any**
     - `~/Library/Preferences/Consulo` - configuration directory
     - `~/Library/Application Support/Consulo Platform` - platform directory
     - `~/Library/Application Support/Consulo` - plugin directory
     - `~/Library/Logs/Consulo` - log directory
