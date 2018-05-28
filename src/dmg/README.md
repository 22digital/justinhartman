# Compiling DMG from .app

These instructions will build a `.dmg` file from any file/folder source using
`appdmg` from the Node modules.

## appdmg.json

The build settings are contained within the `appdmg.json` file.

```json
{
    "title": "@justinhartman",
    "icon": "icon.icns",
    "background": "background.tiff",
    "contents": [
        {
            "x": 448,
            "y": 344,
            "type": "link",
            "path": "/Applications"
        },
        {
            "x": 192,
            "y": 347,
            "type": "file",
            "path": "../../dist/release/@justinhartman.app"
        }
    ]
}
```

## App Resources

The resources required to build the DMG file are contained in `src/dmg/`
and `src/icons/`. The final resources have been moved to `src/dmg/` so all the
required files for building the DMG are contained in this folder. These include
the following files:

- `app-background.pxm` Pixelmator template for creating `background.tiff`.
- `appdmg.json` the settings for `appdmg`.
- `background.tiff` used as the background image for the DMG.
- `icon.icns` the final icon file used for the DMG.

## Creaing the DMG

To create the DMG run the following command from the project root folder.

```terminal
$ appdmg src/dmg/appdmg.json dist/release/1.8.6/@justinhartman.dmg

[ 1/21] Looking for target...                [ OK ]
[ 2/21] Reading JSON Specification...        [ OK ]
[ 3/21] Parsing JSON Specification...        [ OK ]
[ 4/21] Validating JSON Specification...     [ OK ]
[ 5/21] Looking for files...                 [ OK ]
[ 6/21] Calculating size of image...         [ OK ]
[ 7/21] Creating temporary image...          [ OK ]
[ 8/21] Mounting temporary image...          [ OK ]
[ 9/21] Making hidden background folder...   [ OK ]
[10/21] Copying background...                [ OK ]
[11/21] Reading background dimensions...     [ OK ]
[12/21] Copying icon...                      [ OK ]
[13/21] Setting icon...                      [ OK ]
[14/21] Creating links...                    [ OK ]
[15/21] Copying files...                     [ OK ]
[16/21] Making all the visuals...            [ OK ]
[17/21] Blessing image...                    [ OK ]
[18/21] Unmounting temporary image...        [ OK ]
[19/21] Finalizing image...                  [ OK ]
[20/21] Signing image...                     [SKIP]
[21/21] Removing temporary image...          [ OK ]
[22/21] Removing target image...             [ OK ]

Your image is ready:
dist/release/1.8.6/@justinhartman.dmg
```
