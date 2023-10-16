(function(){
    var script = {
 "mouseWheelEnabled": true,
 "defaultVRPointer": "laser",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.MainViewer",
  {
   "scrollBarOpacity": 0.5,
   "children": [
    "this.Container_52EFFDBA_5F1E_E744_41A4_790C8B877FA2"
   ],
   "scrollBarVisible": "rollOver",
   "left": "0%",
   "propagateClick": false,
   "overflow": "scroll",
   "borderRadius": 0,
   "scrollBarMargin": 2,
   "paddingRight": 0,
   "width": "100%",
   "verticalAlign": "middle",
   "paddingLeft": 0,
   "scrollBarWidth": 10,
   "layout": "horizontal",
   "minHeight": 1,
   "bottom": "0%",
   "height": 142,
   "minWidth": 1,
   "gap": 10,
   "borderSize": 0,
   "paddingBottom": 0,
   "class": "Container",
   "contentOpaque": false,
   "paddingTop": 0,
   "data": {
    "name": "Container44746"
   },
   "backgroundOpacity": 0,
   "scrollBarColor": "#000000",
   "shadow": false,
   "horizontalAlign": "center"
  },
  "this.MapViewer"
 ],
 "scrollBarVisible": "rollOver",
 "id": "rootPlayer",
 "downloadEnabled": false,
 "buttonToggleMute": "this.IconButton_52EFFDBA_5F1E_E744_41C3_9571AC923236",
 "propagateClick": false,
 "start": "this.init(); this.playList_28024832_3841_967C_41C2_3835EE393CDE.set('selectedIndex', 0)",
 "overflow": "visible",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "width": "100%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "label": "05",
 "hfovMin": "150%",
 "id": "panorama_2D0504A7_27CA_349F_41BD_787D6249D016",
 "mapLocations": [
  {
   "map": "this.map_28484028_27CE_0B91_41C2_D2FC70B60C43",
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 492.28,
   "x": 778.93
  }
 ],
 "overlays": [
  "this.overlay_2D0534A7_27CA_349F_4196_5F3D76A80E3B",
  "this.overlay_286913CF_27CA_0CAE_41A9_11C6776C399E",
  "this.overlay_20E5D726_2D25_78F9_41B6_C6778975464F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667",
   "yaw": 44.25,
   "distance": 1,
   "backwardYaw": -157.63
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0",
   "yaw": -125.47,
   "distance": 1,
   "backwardYaw": 133.9
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD",
   "yaw": 92.11,
   "distance": 1,
   "backwardYaw": -58.4
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2D0504A7_27CA_349F_41BD_787D6249D016_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2D0504A7_27CA_349F_41BD_787D6249D016_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D0504A7_27CA_349F_41BD_787D6249D016_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2D0504A7_27CA_349F_41BD_787D6249D016_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D0504A7_27CA_349F_41BD_787D6249D016_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2D0504A7_27CA_349F_41BD_787D6249D016_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D0504A7_27CA_349F_41BD_787D6249D016_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2D0504A7_27CA_349F_41BD_787D6249D016_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D0504A7_27CA_349F_41BD_787D6249D016_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2D0504A7_27CA_349F_41BD_787D6249D016_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2D0504A7_27CA_349F_41BD_787D6249D016_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D0504A7_27CA_349F_41BD_787D6249D016_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2D0504A7_27CA_349F_41BD_787D6249D016_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D0504A7_27CA_349F_41BD_787D6249D016_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 126.06,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_2827285A_3841_962C_41C9_915B6580A959",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "label": "03",
 "hfovMin": "150%",
 "id": "panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8",
 "overlays": [
  "this.overlay_2D29DB08_27CA_1D91_41A1_3FA78ADD2830",
  "this.overlay_2D298B08_27CA_1D91_41A0_7E697D897EF7",
  "this.overlay_2D299B08_27CA_1D91_41BE_120F41DA1033"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852",
   "yaw": 172.21,
   "distance": 1,
   "backwardYaw": 4.56
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0",
   "yaw": -86.96,
   "distance": 1,
   "backwardYaw": 178.62
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931",
   "yaw": 24.33,
   "distance": 1,
   "backwardYaw": 17.05
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130
},
{
 "class": "PlayList",
 "items": [
  "this.PanoramaPlayListItem_2806B835_3841_9664_419A_8CDE5D5C490F",
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2E030325_27CA_0D92_41BA_227458795E23",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2E030325_27CA_0D92_41BA_227458795E23_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_camera"
  },
  "this.PanoramaPlayListItem_280A6837_3841_9664_41C7_F9A38CD744E7",
  "this.PanoramaPlayListItem_2809D83C_3841_9664_41A6_B387EBE23FE8",
  "this.PanoramaPlayListItem_2809383D_3841_9664_41B4_C0BB84F5D5A3",
  "this.PanoramaPlayListItem_2808C83D_3841_9664_41CA_1F14E52C904C",
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -87.89,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_296948E5_3841_97E4_41CC_1A93DA63D6BA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticRotationSpeed": 85
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2E030325_27CA_0D92_41BA_227458795E23_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "Panorama",
 "vfov": 180,
 "label": "standard bed room",
 "hfovMin": "150%",
 "id": "panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8_t.jpg",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -162.95,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_2883F8A4_3841_9664_41C3_7277851149A9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticRotationSpeed": 85
},
{
 "class": "MapPlayer",
 "buttonZoomOut": "this.IconButton_52EFFDBA_5F1E_E744_41B2_8B164A9C987C",
 "viewerArea": "this.MapViewer",
 "buttonZoomIn": "this.IconButton_52EFFDBA_5F1E_E744_4195_E83334EB0320",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "label": "04",
 "hfovMin": "150%",
 "id": "panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0",
 "overlays": [
  "this.overlay_2C5AA000_27CA_0B91_41C1_4E06B4546BE0",
  "this.overlay_2C5B5000_27CA_0B91_41B4_DD3DA53054A0",
  "this.overlay_3529DB06_3841_8A24_41A6_7BBDCBBAA1B9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_33E16E8A_3842_8A2C_41C3_4826A28943F8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2D0504A7_27CA_349F_41BD_787D6249D016",
   "yaw": 133.9,
   "distance": 1,
   "backwardYaw": -125.47
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8",
   "yaw": 178.62,
   "distance": 1,
   "backwardYaw": -86.96
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 121.6,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_295948DD_3841_9624_41AF_FBDE9E8BA537",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 93.04,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_28C7B876_3841_96E4_41C5_9B51623A1F07",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "label": "bath room",
 "hfovMin": "150%",
 "id": "panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD",
 "mapLocations": [
  {
   "map": "this.map_28484028_27CE_0B91_41C2_D2FC70B60C43",
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 549.68,
   "x": 1044.55
  }
 ],
 "overlays": [
  "this.overlay_2999BB9D_27CA_FCB3_41B6_F0E49C3CA3D8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2D0504A7_27CA_349F_41BD_787D6249D016",
   "yaw": -58.4,
   "distance": 1,
   "backwardYaw": 92.11
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -135.75,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_28ADF8C5_3841_9624_41C2_B8C0A1D87AE4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -100.4,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_288DF8AB_3841_9663_418E_4EEF1BCC2078",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_28484028_27CE_0B91_41C2_D2FC70B60C43",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_28028832_3841_967C_41B2_5C72A46ECADF"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.44,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_28E2388A_3841_962D_41C9_F7DFF6326212",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_28484028_27CE_0B91_41C2_D2FC70B60C43",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_28024832_3841_967C_41C2_3835EE393CDE"
},
{
 "label": "06",
 "hfovMin": "150%",
 "id": "panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931",
 "mapLocations": [
  {
   "map": "this.map_28484028_27CE_0B91_41C2_D2FC70B60C43",
   "class": "PanoramaMapLocation",
   "angle": -83.31,
   "y": 988.06,
   "x": 834.4
  }
 ],
 "overlays": [
  "this.overlay_0C92EB10_1E1E_429D_4182_E57457AA97C6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8",
   "yaw": 17.05,
   "distance": 1,
   "backwardYaw": 24.33
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2D0504A7_27CA_349F_41BD_787D6249D016_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaPlayer",
 "buttonPause": "this.IconButton_52EFFDBA_5F1E_E744_41C7_B9851D2BBED4",
 "buttonPlayRight": "this.IconButton_52EFFDBA_5F1E_E744_41D1_3BFDF2C580F9",
 "displayPlaybackBar": true,
 "buttonMoveUp": "this.IconButton_52EFFDBA_5F1E_E744_41BA_441B2FBE0236",
 "viewerArea": "this.MainViewer",
 "buttonMoveLeft": "this.IconButton_52EFFDBA_5F1E_E744_41B2_0F85303B4491",
 "id": "MainViewerPanoramaPlayer",
 "buttonZoomOut": "this.IconButton_52EFFDBA_5F1E_E744_41B2_8B164A9C987C",
 "mouseControlMode": "drag_rotation",
 "buttonPlayLeft": "this.IconButton_52EFFDBA_5F1E_E744_41C8_0716A5EF571C",
 "buttonMoveDown": "this.IconButton_52EFFDBA_5F1E_E744_41CB_F6879A3461A0",
 "buttonZoomIn": "this.IconButton_52EFFDBA_5F1E_E744_4195_E83334EB0320",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonMoveRight": "this.IconButton_52EFFDBA_5F1E_E744_41C6_388165D2943C",
 "touchControlMode": "drag_rotation",
 "buttonRestart": "this.IconButton_52EFFDBA_5F1E_E744_41D6_4079C1212818"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_254C3046_286A_928C_41B1_58AEC231DB9C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.79,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_289DC8B8_3841_966C_417C_C4F3F9621DDE",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 22.37,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_28BF88CC_3841_9624_41BD_E292D552CB01",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 54.53,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_28377869_3841_96EC_41B1_B00D7F909C07",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -46.1,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_294F88D6_3841_9624_41B5_401676C11F6C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "label": "02",
 "hfovMin": "150%",
 "id": "panorama_2E030325_27CA_0D92_41BA_227458795E23",
 "overlays": [
  "this.overlay_2E031325_27CA_0D92_41C0_CFD5CF4AF16C",
  "this.overlay_2E03C325_27CA_0D92_41AC_DAAD4D19544B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852",
   "yaw": 79.6,
   "distance": 1,
   "backwardYaw": -53.94
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2E030325_27CA_0D92_41BA_227458795E23_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2E030325_27CA_0D92_41BA_227458795E23_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E030325_27CA_0D92_41BA_227458795E23_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2E030325_27CA_0D92_41BA_227458795E23_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E030325_27CA_0D92_41BA_227458795E23_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2E030325_27CA_0D92_41BA_227458795E23_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E030325_27CA_0D92_41BA_227458795E23_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2E030325_27CA_0D92_41BA_227458795E23_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E030325_27CA_0D92_41BA_227458795E23_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2E030325_27CA_0D92_41BA_227458795E23_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2E030325_27CA_0D92_41BA_227458795E23_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E030325_27CA_0D92_41BA_227458795E23_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2E030325_27CA_0D92_41BA_227458795E23_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E030325_27CA_0D92_41BA_227458795E23_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130
},
{
 "label": "closet02",
 "hfovMin": "150%",
 "id": "panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667",
 "overlays": [
  "this.overlay_3EED00C0_2D23_39BA_41B0_D5AB4271E5AA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2D0504A7_27CA_349F_41BD_787D6249D016",
   "yaw": -157.63,
   "distance": 1,
   "backwardYaw": 44.25
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -155.67,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_28D1C882_3841_961D_4177_06E4F2D61D09",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "Panorama",
 "vfov": 180,
 "label": "LAUNDRY",
 "hfovMin": "150%",
 "id": "panorama_254C3046_286A_928C_41B1_58AEC231DB9C",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_254C3046_286A_928C_41B1_58AEC231DB9C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_254C3046_286A_928C_41B1_58AEC231DB9C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_254C3046_286A_928C_41B1_58AEC231DB9C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_254C3046_286A_928C_41B1_58AEC231DB9C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_254C3046_286A_928C_41B1_58AEC231DB9C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_254C3046_286A_928C_41B1_58AEC231DB9C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_254C3046_286A_928C_41B1_58AEC231DB9C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_254C3046_286A_928C_41B1_58AEC231DB9C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_254C3046_286A_928C_41B1_58AEC231DB9C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_254C3046_286A_928C_41B1_58AEC231DB9C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_254C3046_286A_928C_41B1_58AEC231DB9C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_254C3046_286A_928C_41B1_58AEC231DB9C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_254C3046_286A_928C_41B1_58AEC231DB9C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_254C3046_286A_928C_41B1_58AEC231DB9C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_254C3046_286A_928C_41B1_58AEC231DB9C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_254C3046_286A_928C_41B1_58AEC231DB9C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_254C3046_286A_928C_41B1_58AEC231DB9C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_254C3046_286A_928C_41B1_58AEC231DB9C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_254C3046_286A_928C_41B1_58AEC231DB9C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_254C3046_286A_928C_41B1_58AEC231DB9C_t.jpg",
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_28484028_27CE_0B91_41C2_D2FC70B60C43",
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 496.18,
   "x": 197.9
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "fieldOfViewOverlayInsideColor": "#CC3333",
 "id": "map_28484028_27CE_0B91_41C2_D2FC70B60C43",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 1210,
 "label": "floor plan",
 "image": {
  "levels": [
   {
    "url": "media/map_28484028_27CE_0B91_41C2_D2FC70B60C43.png",
    "class": "ImageResourceLevel",
    "width": 1210,
    "height": 1188
   },
   {
    "url": "media/map_28484028_27CE_0B91_41C2_D2FC70B60C43_lq.png",
    "class": "ImageResourceLevel",
    "tags": "preload",
    "width": 258,
    "height": 254
   }
  ],
  "class": "ImageResource"
 },
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_284497CB_27CE_7497_41BD_12741E0AB0AA",
  "this.overlay_37A60AB5_27CA_FCF3_41BE_285185F49FAE",
  "this.overlay_37A00702_27CA_1591_41C1_9270147611E2",
  "this.overlay_280BCC89_27CA_7493_41BD_11C702313868",
  "this.overlay_26D37DE6_286F_AD80_41C1_337CEEFC2692",
  "this.overlay_23F0719D_2D27_7BCA_41A3_D09533CEB0B2"
 ],
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.43,
 "thumbnailUrl": "media/map_28484028_27CE_0B91_41C2_D2FC70B60C43_t.png",
 "fieldOfViewOverlayRadiusScale": 0.16,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "maximumZoomFactor": 1.2,
 "height": 1188
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "label": "01",
 "hfovMin": "150%",
 "id": "panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852",
 "mapLocations": [
  {
   "map": "this.map_28484028_27CE_0B91_41C2_D2FC70B60C43",
   "class": "PanoramaMapLocation",
   "angle": 43.75,
   "y": 990.7,
   "x": 223.34
  }
 ],
 "overlays": [
  "this.overlay_2C6B3B7D_27CA_1C73_41B6_49E0119B681A",
  "this.overlay_2C6B0B7E_27CA_1C71_4174_6EE18D9CBEC4",
  "this.overlay_28636038_27CE_0BF2_41BC_510266336520"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_254C3046_286A_928C_41B1_58AEC231DB9C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E030325_27CA_0D92_41BA_227458795E23",
   "yaw": -53.94,
   "distance": 1,
   "backwardYaw": 79.6
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8",
   "yaw": 4.56,
   "distance": 1,
   "backwardYaw": 172.21
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.38,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_28F3F897_3841_9623_41C0_30A005675F44",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "left": 0,
 "propagateClick": false,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "progressBarBorderSize": 0,
 "borderRadius": 0,
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "paddingLeft": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderRadius": 4,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "transitionDuration": 500,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontSize": 12,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderRadius": 0,
 "height": "100%",
 "progressLeft": 10,
 "toolTipPaddingBottom": 4,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderSize": 0,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 2,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 1,
 "progressRight": 10,
 "progressHeight": 20,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "toolTipBorderRadius": 3,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#AAAAAA",
 "transitionMode": "blending",
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingRight": 0,
 "progressBorderRadius": 4,
 "progressBorderSize": 2,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "top": 0,
 "playbackBarHeadHeight": 30,
 "playbackBarLeft": 0,
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderColor": "#000000",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 10,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#AAAAAA",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "toolTipDisplayTime": 600,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "toolTipFontWeight": "normal",
 "paddingTop": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarHeight": 20,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingRight": 6,
 "playbackBarHeadWidth": 6
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_52EFFDBA_5F1E_E744_41B2_8B164A9C987C",
  "this.IconButton_52EFFDBA_5F1E_E744_41D6_4079C1212818",
  "this.IconButton_52EFFDBA_5F1E_E744_41C8_0716A5EF571C",
  "this.IconButton_52EFFDBA_5F1E_E744_41B2_0F85303B4491",
  "this.Container_52EFFDBA_5F1E_E744_41C3_F77D1A22E975",
  "this.IconButton_52EFFDBA_5F1E_E744_41C6_388165D2943C",
  "this.IconButton_52EFFDBA_5F1E_E744_41D1_3BFDF2C580F9",
  "this.IconButton_52EFFDBA_5F1E_E744_41C3_9571AC923236",
  "this.IconButton_52EFFDBA_5F1E_E744_4195_E83334EB0320"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_52EFFDBA_5F1E_E744_41A4_790C8B877FA2",
 "width": 392,
 "propagateClick": false,
 "overflow": "hidden",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "minHeight": 20,
 "height": "100%",
 "minWidth": 392,
 "gap": 4,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container6558"
 },
 "backgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "id": "MapViewer",
 "left": "0%",
 "propagateClick": false,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "progressBarBorderSize": 0,
 "borderRadius": 0,
 "width": "40%",
 "playbackBarProgressBorderSize": 0,
 "paddingLeft": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderRadius": 4,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "transitionDuration": 500,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontSize": 12,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderRadius": 0,
 "height": "30%",
 "progressLeft": 10,
 "toolTipPaddingBottom": 4,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderSize": 0,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 2,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressRight": 10,
 "progressHeight": 20,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "toolTipBorderRadius": 3,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#AAAAAA",
 "transitionMode": "blending",
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingRight": 0,
 "progressBorderRadius": 4,
 "progressBorderSize": 2,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "playbackBarHeadHeight": 30,
 "playbackBarLeft": 0,
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderColor": "#000000",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#AAAAAA",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "toolTipDisplayTime": 600,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "data": {
  "name": "MapViewer"
 },
 "toolTipFontWeight": "normal",
 "paddingTop": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarHeight": 20,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingRight": 6,
 "playbackBarHeadWidth": 6
},
{
 "id": "IconButton_52EFFDBA_5F1E_E744_41C3_9571AC923236",
 "width": 40,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41C3_9571AC923236_pressed.png",
 "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41C3_9571AC923236.png",
 "class": "IconButton",
 "data": {
  "name": "Button6569"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0, this.camera_294F88D6_3841_9624_41B5_401676C11F6C); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -125.47,
   "hfov": 13.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D0504A7_27CA_349F_41BD_787D6249D016_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.49
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -125.47,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D0504A7_27CA_349F_41BD_787D6249D016_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 41
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.49,
   "hfov": 13.47
  }
 ],
 "id": "overlay_2D0534A7_27CA_349F_4196_5F3D76A80E3B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD, this.camera_295948DD_3841_9624_41AF_FBDE9E8BA537); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.11,
   "hfov": 18.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D0504A7_27CA_349F_41BD_787D6249D016_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.58
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 92.11,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D0504A7_27CA_349F_41BD_787D6249D016_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 108,
      "height": 83
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.58,
   "hfov": 18.57
  }
 ],
 "id": "overlay_286913CF_27CA_0CAE_41A9_11C6776C399E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667, this.camera_28BF88CC_3841_9624_41BD_E292D552CB01); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.25,
   "hfov": 12.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D0504A7_27CA_349F_41BD_787D6249D016_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 21
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.94
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 44.25,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D0504A7_27CA_349F_41BD_787D6249D016_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 74,
      "height": 99
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.94,
   "hfov": 12.88
  }
 ],
 "id": "overlay_20E5D726_2D25_78F9_41B6_C6778975464F",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0, this.camera_28F3F897_3841_9623_41C0_30A005675F44); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -86.96,
   "hfov": 21.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.29
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_37A47B74_27D6_FC71_4191_780EB8BB5C5A",
   "pitch": -28.29,
   "yaw": -86.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.4,
   "distance": 100
  }
 ],
 "id": "overlay_2D29DB08_27CA_1D91_41A1_3FA78ADD2830",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852, this.camera_28E2388A_3841_962D_41C9_F7DFF6326212); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.21,
   "hfov": 13.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.23
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_37A43B74_27D6_FC71_4181_D4D40063265A",
   "pitch": -20.23,
   "yaw": 172.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.2,
   "distance": 100
  }
 ],
 "id": "overlay_2D298B08_27CA_1D91_41A0_7E697D897EF7",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931, this.camera_2883F8A4_3841_9664_41C3_7277851149A9); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.33,
   "hfov": 16.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.16
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_37A4EB74_27D6_FC71_418B_7B3CEE71B2BA",
   "pitch": -26.16,
   "yaw": 24.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.4,
   "distance": 100
  }
 ],
 "id": "overlay_2D299B08_27CA_1D91_41BE_120F41DA1033",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_2806B835_3841_9664_419A_8CDE5D5C490F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "media": "this.panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852",
 "id": "PanoramaPlayListItem_2806B835_3841_9664_419A_8CDE5D5C490F",
 "camera": "this.panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_280A6837_3841_9664_41C7_F9A38CD744E7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "media": "this.panorama_2D0504A7_27CA_349F_41BD_787D6249D016",
 "id": "PanoramaPlayListItem_280A6837_3841_9664_41C7_F9A38CD744E7",
 "camera": "this.panorama_2D0504A7_27CA_349F_41BD_787D6249D016_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_2809D83C_3841_9664_41A6_B387EBE23FE8, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "media": "this.panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931",
 "id": "PanoramaPlayListItem_2809D83C_3841_9664_41A6_B387EBE23FE8",
 "camera": "this.panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_2809383D_3841_9664_41B4_C0BB84F5D5A3, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
 "media": "this.panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD",
 "id": "PanoramaPlayListItem_2809383D_3841_9664_41B4_C0BB84F5D5A3",
 "camera": "this.panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_camera"
},
{
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_2808C83D_3841_9664_41CA_1F14E52C904C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
 "media": "this.panorama_254C3046_286A_928C_41B1_58AEC231DB9C",
 "id": "PanoramaPlayListItem_2808C83D_3841_9664_41CA_1F14E52C904C",
 "camera": "this.panorama_254C3046_286A_928C_41B1_58AEC231DB9C_camera"
},
{
 "id": "IconButton_52EFFDBA_5F1E_E744_41B2_8B164A9C987C",
 "width": 40,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41B2_8B164A9C987C_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41B2_8B164A9C987C_pressed.png",
 "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41B2_8B164A9C987C.png",
 "class": "IconButton",
 "data": {
  "name": "Button6559"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "id": "IconButton_52EFFDBA_5F1E_E744_4195_E83334EB0320",
 "width": 40,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_4195_E83334EB0320_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_4195_E83334EB0320_pressed.png",
 "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_4195_E83334EB0320.png",
 "class": "IconButton",
 "data": {
  "name": "Button6570"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8, this.camera_28C7B876_3841_96E4_41C5_9B51623A1F07); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.62,
   "hfov": 16.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.2
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_37A4AB74_27D6_FC71_4173_D6BF5DD7DFD6",
   "pitch": -31.2,
   "yaw": 178.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.55,
   "distance": 100
  }
 ],
 "id": "overlay_2C5AA000_27CA_0B91_41C1_4E06B4546BE0",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D0504A7_27CA_349F_41BD_787D6249D016, this.camera_28377869_3841_96EC_41B1_B00D7F909C07); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.9,
   "hfov": 13.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.88
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 133.9,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 81,
      "height": 84
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.88,
   "hfov": 13.64
  }
 ],
 "id": "overlay_2C5B5000_27CA_0B91_41B4_DD3DA53054A0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.11,
   "hfov": 9.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 21
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.59
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -29.11,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 77
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.59,
   "hfov": 9.78
  }
 ],
 "id": "overlay_3529DB06_3841_8A24_41A6_7BBDCBBAA1B9",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D0504A7_27CA_349F_41BD_787D6249D016, this.camera_296948E5_3841_97E4_41CC_1A93DA63D6BA); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -58.4,
   "hfov": 13.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.74
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -58.4,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2B6D7784_27CA_1491_41C3_0209D86E68DD_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 151,
      "height": 151
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.74,
   "hfov": 13.43
  }
 ],
 "id": "overlay_2999BB9D_27CA_FCB3_41B6_F0E49C3CA3D8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8, this.camera_28D1C882_3841_961D_4177_06E4F2D61D09); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 17.05,
   "hfov": 17.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.78
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0D836BE4_1E1E_C186_418F_99B534522BC1",
   "pitch": -24.78,
   "yaw": 17.05,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.05,
   "distance": 100
  }
 ],
 "id": "overlay_0C92EB10_1E1E_429D_4182_E57457AA97C6",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "id": "IconButton_52EFFDBA_5F1E_E744_41C7_B9851D2BBED4",
 "width": 40,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41C7_B9851D2BBED4_pressed.png",
 "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41C7_B9851D2BBED4.png",
 "class": "IconButton",
 "data": {
  "name": "Button6565"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "id": "IconButton_52EFFDBA_5F1E_E744_41D1_3BFDF2C580F9",
 "width": 40,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41D1_3BFDF2C580F9_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41D1_3BFDF2C580F9_pressed.png",
 "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41D1_3BFDF2C580F9.png",
 "class": "IconButton",
 "data": {
  "name": "Button6568"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "id": "IconButton_52EFFDBA_5F1E_E744_41BA_441B2FBE0236",
 "width": 40,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41BA_441B2FBE0236_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41BA_441B2FBE0236_pressed.png",
 "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41BA_441B2FBE0236.png",
 "class": "IconButton",
 "data": {
  "name": "Button6564"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "id": "IconButton_52EFFDBA_5F1E_E744_41B2_0F85303B4491",
 "width": 40,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41B2_0F85303B4491_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41B2_0F85303B4491_pressed.png",
 "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41B2_0F85303B4491.png",
 "class": "IconButton",
 "data": {
  "name": "Button6562"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "id": "IconButton_52EFFDBA_5F1E_E744_41C8_0716A5EF571C",
 "width": 40,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41C8_0716A5EF571C_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41C8_0716A5EF571C_pressed.png",
 "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41C8_0716A5EF571C.png",
 "class": "IconButton",
 "data": {
  "name": "Button6561"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "id": "IconButton_52EFFDBA_5F1E_E744_41CB_F6879A3461A0",
 "width": 40,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41CB_F6879A3461A0_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41CB_F6879A3461A0_pressed.png",
 "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41CB_F6879A3461A0.png",
 "class": "IconButton",
 "data": {
  "name": "Button6566"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "id": "IconButton_52EFFDBA_5F1E_E744_41C6_388165D2943C",
 "width": 40,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41C6_388165D2943C_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41C6_388165D2943C_pressed.png",
 "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41C6_388165D2943C.png",
 "class": "IconButton",
 "data": {
  "name": "Button6567"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "id": "IconButton_52EFFDBA_5F1E_E744_41D6_4079C1212818",
 "width": 40,
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41D6_4079C1212818_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41D6_4079C1212818_pressed.png",
 "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41D6_4079C1212818.png",
 "class": "IconButton",
 "data": {
  "name": "Button6560"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852, this.camera_2827285A_3841_962C_41C9_915B6580A959); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.6,
   "hfov": 15.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E030325_27CA_0D92_41BA_227458795E23_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.3
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_37A30B73_27D6_FC77_41B9_4B111106D070",
   "pitch": -29.3,
   "yaw": 79.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.06,
   "distance": 100
  }
 ],
 "id": "overlay_2E031325_27CA_0D92_41C0_CFD5CF4AF16C",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.15,
   "hfov": 15.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E030325_27CA_0D92_41BA_227458795E23_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.28
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_37A3BB73_27D6_FC77_41A7_D20D1FE13060",
   "pitch": -26.28,
   "yaw": -75.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.48,
   "distance": 100
  }
 ],
 "id": "overlay_2E03C325_27CA_0D92_41AC_DAAD4D19544B",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D0504A7_27CA_349F_41BD_787D6249D016, this.camera_28ADF8C5_3841_9624_41C2_B8C0A1D87AE4); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.63,
   "hfov": 13.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.97
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -157.63,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3F4A1EF5_2D22_C95B_41B4_B1F6B04B3667_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 151,
      "height": 151
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.97,
   "hfov": 13.54
  }
 ],
 "id": "overlay_3EED00C0_2D23_39BA_41B0_D5AB4271E5AA",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 952.93,
  "x": 799.38,
  "width": 70.03,
  "image": {
   "levels": [
    {
     "url": "media/map_28484028_27CE_0B91_41C2_D2FC70B60C43_HS_0.png",
     "class": "ImageResourceLevel",
     "width": 70,
     "height": 70
    }
   ],
   "class": "ImageResource"
  },
  "height": 70.25
 },
 "map": {
  "width": 70.03,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_28484028_27CE_0B91_41C2_D2FC70B60C43_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 952.93,
  "x": 799.38,
  "offsetY": 0,
  "height": 70.25,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_284497CB_27CE_7497_41BD_12741E0AB0AA",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 972.98,
  "x": 167.91,
  "width": 110.86,
  "image": {
   "levels": [
    {
     "url": "media/map_28484028_27CE_0B91_41C2_D2FC70B60C43_HS_1.png",
     "class": "ImageResourceLevel",
     "width": 110,
     "height": 35
    }
   ],
   "class": "ImageResource"
  },
  "height": 35.44
 },
 "map": {
  "width": 110.86,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_28484028_27CE_0B91_41C2_D2FC70B60C43_HS_1_map.gif",
     "class": "ImageResourceLevel",
     "width": 50,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 972.98,
  "x": 167.91,
  "offsetY": 0,
  "height": 35.44,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_37A60AB5_27CA_FCF3_41BE_285185F49FAE",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 521.81,
  "x": 1004.84,
  "width": 79.42,
  "image": {
   "levels": [
    {
     "url": "media/map_28484028_27CE_0B91_41C2_D2FC70B60C43_HS_2.png",
     "class": "ImageResourceLevel",
     "width": 79,
     "height": 55
    }
   ],
   "class": "ImageResource"
  },
  "height": 55.74
 },
 "map": {
  "width": 79.42,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_28484028_27CE_0B91_41C2_D2FC70B60C43_HS_2_map.gif",
     "class": "ImageResourceLevel",
     "width": 22,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 521.81,
  "x": 1004.84,
  "offsetY": 0,
  "height": 55.74,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_37A00702_27CA_1591_41C1_9270147611E2",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 454.79,
  "x": 743.01,
  "width": 71.84,
  "image": {
   "levels": [
    {
     "url": "media/map_28484028_27CE_0B91_41C2_D2FC70B60C43_HS_3.png",
     "class": "ImageResourceLevel",
     "width": 71,
     "height": 74
    }
   ],
   "class": "ImageResource"
  },
  "height": 74.98
 },
 "map": {
  "width": 71.84,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_28484028_27CE_0B91_41C2_D2FC70B60C43_HS_3_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 454.93,
  "x": 743.16,
  "offsetY": 0,
  "height": 74.98,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_280BCC89_27CA_7493_41BD_11C702313868",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 480.48,
  "x": 167.11,
  "width": 61.58,
  "image": {
   "levels": [
    {
     "url": "media/map_28484028_27CE_0B91_41C2_D2FC70B60C43_HS_4.png",
     "class": "ImageResourceLevel",
     "width": 61,
     "height": 31
    }
   ],
   "class": "ImageResource"
  },
  "height": 31.41
 },
 "map": {
  "width": 61.58,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_28484028_27CE_0B91_41C2_D2FC70B60C43_HS_4_map.gif",
     "class": "ImageResourceLevel",
     "width": 31,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 480.48,
  "x": 167.11,
  "offsetY": 0,
  "height": 31.41,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_26D37DE6_286F_AD80_41C1_337CEEFC2692",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 282.63,
  "x": 776.99,
  "width": 68.93,
  "image": {
   "levels": [
    {
     "url": "media/map_28484028_27CE_0B91_41C2_D2FC70B60C43_HS_5.png",
     "class": "ImageResourceLevel",
     "width": 68,
     "height": 58
    }
   ],
   "class": "ImageResource"
  },
  "height": 58.19
 },
 "map": {
  "width": 68.93,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_28484028_27CE_0B91_41C2_D2FC70B60C43_HS_5_map.gif",
     "class": "ImageResourceLevel",
     "width": 18,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 282.63,
  "x": 776.99,
  "offsetY": 0,
  "height": 58.19,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_23F0719D_2D27_7BCA_41A3_D09533CEB0B2",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2E030325_27CA_0D92_41BA_227458795E23, this.camera_288DF8AB_3841_9663_418E_4EEF1BCC2078); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.94,
   "hfov": 11.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.67
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_37A2EB73_27D6_FC77_41B0_4E673457E728",
   "pitch": -34.67,
   "yaw": -53.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.59,
   "distance": 100
  }
 ],
 "id": "overlay_2C6B3B7D_27CA_1C73_41B6_49E0119B681A",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8, this.camera_289DC8B8_3841_966C_417C_C4F3F9621DDE); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.56,
   "hfov": 8.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.19
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_37A36B73_27D6_FC77_419F_94B9882F5DE0",
   "pitch": -19.19,
   "yaw": 4.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.4,
   "distance": 100
  }
 ],
 "id": "overlay_2C6B0B7E_27CA_1C71_4174_6EE18D9CBEC4",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.26,
   "hfov": 6.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.76
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -71.26,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 40,
      "height": 50
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.76,
   "hfov": 6.99
  }
 ],
 "id": "overlay_28636038_27CE_0BF2_41BC_510266336520",
 "data": {
  "label": "Image"
 }
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_52EFFDBA_5F1E_E744_41BA_441B2FBE0236",
  "this.IconButton_52EFFDBA_5F1E_E744_41C7_B9851D2BBED4",
  "this.IconButton_52EFFDBA_5F1E_E744_41CB_F6879A3461A0"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_52EFFDBA_5F1E_E744_41C3_F77D1A22E975",
 "width": 40,
 "propagateClick": false,
 "overflow": "hidden",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "minHeight": 20,
 "height": "100%",
 "minWidth": 20,
 "gap": 4,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container6563"
 },
 "backgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_37A47B74_27D6_FC71_4191_780EB8BB5C5A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_37A43B74_27D6_FC71_4181_D4D40063265A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D29CB03_27CA_1D97_41C0_95C64A883CB8_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_37A4EB74_27D6_FC71_418B_7B3CEE71B2BA",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2C5AB000_27CA_0B91_41B7_A21A754B16A0_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_37A4AB74_27D6_FC71_4173_D6BF5DD7DFD6",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0D3BB814_1E12_4E85_4187_6CEC08DBD931_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0D836BE4_1E1E_C186_418F_99B534522BC1",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2E030325_27CA_0D92_41BA_227458795E23_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_37A30B73_27D6_FC77_41B9_4B111106D070",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2E030325_27CA_0D92_41BA_227458795E23_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_37A3BB73_27D6_FC77_41A7_D20D1FE13060",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_37A2EB73_27D6_FC77_41B0_4E673457E728",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2C6ACB7D_27CA_1C73_41C1_80F1578C1852_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_37A36B73_27D6_FC77_419F_94B9882F5DE0",
 "frameCount": 24
}],
 "mobileMipmappingEnabled": false,
 "layout": "absolute",
 "minWidth": 20,
 "vrPolyfillScale": 1,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "gap": 10,
 "class": "Player",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Player43899"
 },
 "scrollBarColor": "#000000",
 "scripts": {
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getKey": function(key){  return window[key]; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "unregisterKey": function(key){  delete window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "shadow": false,
 "horizontalAlign": "left"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
