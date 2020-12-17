# AR-Plane-Detection
# Problem: To detect a flat plane in 3D space and placing a 3D object on its surface

# Relavent Research:  
&nbsp;&nbsp;1) SIFT vs ORB vs SURF Feature Detectors: [Paper](https://arxiv.org/abs/1710.02726)  
  * Both SIFT and ORB are available on opencv and are open-source  
  * We found SIFT was better able to keep points after image transformations than ORB  
  * However, SIFT was unable to attain realtime performance, so the ORB feature detector was used  
  2) PlaneRCNN: 3D Plane Detection and Reconstruction from a Single Image [Paper](https://arxiv.org/abs/1812.04072_)
  * Relavent and cool paper about plane detection from a single RGB image w/o depth data using neural networks
  3) Capabilities of ARCore and ARKit Platforms for AR/VR Applications: [Paper](https://doi.org/10.1007/978-3-030-19501-4_36)
  * Performance stats of Apple and Google's implementations for AR programs

# Walkthrough of Solution:
1) CLAHE: Apply Contrast equalization to image's to extract more features. This is useful for getting features from flat & smooth surfaces.
2) Use ORB feature/descriptor detector to detect and compute feature points from CLAHE'd image
3) Compare descriptors from current and following image using matcher + lowe's ratio test to match keypoints
4) Apply RANSAC to throw out outliers and clean up motion flow
5) Find the Homogrophy; which gets the transformation/orientation data of a surface
6) Draw 3D object on detected surface

# Demo:  
1) Plane Detection without CLAHE Equalization  
   ![data/Demo.gif](https://github.com/supreethub/AR-Plane-Detection/blob/main/data/Demo.gif)
   ![data/Orientation_Demo.gif](https://github.com/supreethub/AR-Plane-Detection/blob/main/data/Orientation_Demo.gif)
2) Plane Detection with CLAHE Equalization:  
   ![data/cactus_plane.gif](https://github.com/supreethub/AR-Plane-Detection/blob/main/data/cactus_plane.gif)
# Issues:
1) The 2nd demo is able to detect flat surfaces but is slow (i.e. non-realtime) and could be improved upon
# Future Improvements: 
