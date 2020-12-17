# AR-Plane-Detection
# Problem: To detect a flat plane in 3D space and placing a 3D object on its surface

# Relavent Research:  
&nbsp;&nbsp;1) SIFT vs ORB vs SURF Feature Detectors: [Paper](https://arxiv.org/abs/1710.02726)  
  * Both SIFT and ORB are available on opencv and are open-source  
  * We found SIFT was better able to keep points after image transformations than ORB  
  * However, SIFT was unable to attain realtime performance, so the ORB feature detector was used  

# Walkthrough of Solution:

# Demo:  
1) Plane Detection without CLAHE Equalization
   ![data/Demo.gif](https://github.com/supreethub/AR-Plane-Detection/blob/main/data/Demo.gif)
   ![data/Orientation_Demo.gif](https://github.com/supreethub/AR-Plane-Detection/blob/main/data/Orientation_Demo.gif)
2) Plane Detection with CLAHE Equalization:  
   ![data/cactus_plane.gif](https://github.com/supreethub/AR-Plane-Detection/blob/main/data/cactus_plane.gif)
# Issues:
1) The 2nd demo is able to detect flat surfaces but is slow (i.e. non-realtime) and could be improved upon
# Future Improvements: 
