### Plugin Installation
1. Launch Consulo
- <kbd>File</kbd> menu -> <kbd>Settings</kbd>
- Under <kbd>Platform & Plugins</kbd>
- Look for <kbd>Unity3D</kbd>, and ensure that it is selected.

If <kbd>Unity3D</kbd> option is not present, do the following:

1. Select <kbd>From Repository</kbd> tab
1. Search <kbd>Unity3D</kbd> install plugin with dependencies
1. Once everything has been installed, close the settings window and restart Consulo.

### Locating the Unity SDK
Note: If Unity3D is installed to its default location, Consulo will locate it automatically and this step may be skipped.

1. Bring up the Consulo Launcher
- Select <kbd>Configure</kbd>
- Select <kbd>Settings (or Preferences on macOS)</kbd>
- On the left, under <kbd>SDKs/Bundles/Tools</kbd>
- Press the green (black on OS X) <kbd>➕</kbd> icon, and choose <kbd>Unity3D</kbd>
- Locate your Unity installation directory, select it and then press <kbd>OK</kbd>

All set :+1:

### Manually Importing a Unity Project

 1. From the <kbd>File</kbd> menu, select <kbd>Open or Import project</kbd>
 - Select the root directory of your Unity Project, press <kbd>OK</kbd>
 - You'll be prompted to “Open or Import project” (choose <kbd>Unity3D</kbd> if needed), then <kbd>OK</kbd>
 - On the next window, ensure the correct Unity SDK is selected, and press <kbd>Finish</kbd>

The project is now opened in Consulo

### Configuring Consulo as the external script editor for Unity

1. Launch Unity Editor
- From the <kbd>Edit</kbd> menu, select <kbd>Preferences</kbd>
- Select the <kbd>External Tools</kbd> tab
- Click on the the <kbd>External Editor</kbd> dropdown box, and select <kbd>Browse</kbd>
- Locate your Consulo installation directory, and select the Unity executable file.
 - For example: `Consulo\consulo64.exe` or `Consulo.app` for macOS
- Once complete, the dropdown box should say “Consulo“
- Select the <kbd>Editor Attaching</kbd> checkbox
- Close the preferences window

- **Require** installed Consulo plugin for UnityEditor. Read README from https://github.com/consulo/UnityEditorConsuloPlugin

Now whenever you double-click a script from within Unity or right-click and select <kbd>Edit Script</kbd>, Consulo will be launched and the specific script file will be opened.
