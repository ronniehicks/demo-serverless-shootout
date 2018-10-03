/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 77.0, "minX": 0.0, "maxY": 2509.0, "series": [{"data": [[0.0, 77.0], [0.1, 78.0], [0.2, 79.0], [0.3, 79.0], [0.4, 79.0], [0.5, 79.0], [0.6, 79.0], [0.7, 79.0], [0.8, 80.0], [0.9, 80.0], [1.0, 80.0], [1.1, 80.0], [1.2, 80.0], [1.3, 80.0], [1.4, 80.0], [1.5, 80.0], [1.6, 81.0], [1.7, 81.0], [1.8, 81.0], [1.9, 81.0], [2.0, 81.0], [2.1, 81.0], [2.2, 81.0], [2.3, 81.0], [2.4, 81.0], [2.5, 81.0], [2.6, 81.0], [2.7, 81.0], [2.8, 81.0], [2.9, 81.0], [3.0, 81.0], [3.1, 81.0], [3.2, 81.0], [3.3, 81.0], [3.4, 82.0], [3.5, 82.0], [3.6, 82.0], [3.7, 82.0], [3.8, 82.0], [3.9, 82.0], [4.0, 82.0], [4.1, 82.0], [4.2, 82.0], [4.3, 82.0], [4.4, 82.0], [4.5, 82.0], [4.6, 82.0], [4.7, 82.0], [4.8, 82.0], [4.9, 82.0], [5.0, 82.0], [5.1, 82.0], [5.2, 82.0], [5.3, 82.0], [5.4, 82.0], [5.5, 83.0], [5.6, 83.0], [5.7, 83.0], [5.8, 83.0], [5.9, 83.0], [6.0, 83.0], [6.1, 83.0], [6.2, 83.0], [6.3, 83.0], [6.4, 83.0], [6.5, 83.0], [6.6, 83.0], [6.7, 83.0], [6.8, 83.0], [6.9, 83.0], [7.0, 83.0], [7.1, 83.0], [7.2, 83.0], [7.3, 83.0], [7.4, 83.0], [7.5, 83.0], [7.6, 83.0], [7.7, 83.0], [7.8, 83.0], [7.9, 83.0], [8.0, 83.0], [8.1, 83.0], [8.2, 83.0], [8.3, 83.0], [8.4, 84.0], [8.5, 84.0], [8.6, 84.0], [8.7, 84.0], [8.8, 84.0], [8.9, 84.0], [9.0, 84.0], [9.1, 84.0], [9.2, 84.0], [9.3, 84.0], [9.4, 84.0], [9.5, 84.0], [9.6, 84.0], [9.7, 84.0], [9.8, 84.0], [9.9, 84.0], [10.0, 84.0], [10.1, 84.0], [10.2, 84.0], [10.3, 84.0], [10.4, 84.0], [10.5, 84.0], [10.6, 84.0], [10.7, 84.0], [10.8, 84.0], [10.9, 84.0], [11.0, 84.0], [11.1, 84.0], [11.2, 85.0], [11.3, 85.0], [11.4, 85.0], [11.5, 85.0], [11.6, 85.0], [11.7, 85.0], [11.8, 85.0], [11.9, 85.0], [12.0, 85.0], [12.1, 85.0], [12.2, 85.0], [12.3, 85.0], [12.4, 85.0], [12.5, 85.0], [12.6, 85.0], [12.7, 85.0], [12.8, 85.0], [12.9, 85.0], [13.0, 85.0], [13.1, 85.0], [13.2, 85.0], [13.3, 85.0], [13.4, 85.0], [13.5, 85.0], [13.6, 85.0], [13.7, 85.0], [13.8, 85.0], [13.9, 85.0], [14.0, 85.0], [14.1, 85.0], [14.2, 85.0], [14.3, 85.0], [14.4, 85.0], [14.5, 85.0], [14.6, 85.0], [14.7, 85.0], [14.8, 85.0], [14.9, 85.0], [15.0, 85.0], [15.1, 85.0], [15.2, 85.0], [15.3, 85.0], [15.4, 85.0], [15.5, 86.0], [15.6, 86.0], [15.7, 86.0], [15.8, 86.0], [15.9, 86.0], [16.0, 86.0], [16.1, 86.0], [16.2, 86.0], [16.3, 86.0], [16.4, 86.0], [16.5, 86.0], [16.6, 86.0], [16.7, 86.0], [16.8, 86.0], [16.9, 86.0], [17.0, 86.0], [17.1, 86.0], [17.2, 86.0], [17.3, 86.0], [17.4, 86.0], [17.5, 86.0], [17.6, 86.0], [17.7, 86.0], [17.8, 86.0], [17.9, 86.0], [18.0, 86.0], [18.1, 86.0], [18.2, 86.0], [18.3, 86.0], [18.4, 86.0], [18.5, 86.0], [18.6, 86.0], [18.7, 86.0], [18.8, 86.0], [18.9, 86.0], [19.0, 86.0], [19.1, 86.0], [19.2, 86.0], [19.3, 86.0], [19.4, 87.0], [19.5, 87.0], [19.6, 87.0], [19.7, 87.0], [19.8, 87.0], [19.9, 87.0], [20.0, 87.0], [20.1, 87.0], [20.2, 87.0], [20.3, 87.0], [20.4, 87.0], [20.5, 87.0], [20.6, 87.0], [20.7, 87.0], [20.8, 87.0], [20.9, 87.0], [21.0, 87.0], [21.1, 87.0], [21.2, 87.0], [21.3, 87.0], [21.4, 87.0], [21.5, 87.0], [21.6, 87.0], [21.7, 87.0], [21.8, 87.0], [21.9, 87.0], [22.0, 87.0], [22.1, 87.0], [22.2, 87.0], [22.3, 87.0], [22.4, 87.0], [22.5, 87.0], [22.6, 87.0], [22.7, 87.0], [22.8, 87.0], [22.9, 87.0], [23.0, 87.0], [23.1, 87.0], [23.2, 87.0], [23.3, 87.0], [23.4, 87.0], [23.5, 88.0], [23.6, 88.0], [23.7, 88.0], [23.8, 88.0], [23.9, 88.0], [24.0, 88.0], [24.1, 88.0], [24.2, 88.0], [24.3, 88.0], [24.4, 88.0], [24.5, 88.0], [24.6, 88.0], [24.7, 88.0], [24.8, 88.0], [24.9, 88.0], [25.0, 88.0], [25.1, 88.0], [25.2, 88.0], [25.3, 88.0], [25.4, 88.0], [25.5, 88.0], [25.6, 88.0], [25.7, 88.0], [25.8, 88.0], [25.9, 88.0], [26.0, 88.0], [26.1, 88.0], [26.2, 88.0], [26.3, 88.0], [26.4, 88.0], [26.5, 88.0], [26.6, 88.0], [26.7, 88.0], [26.8, 88.0], [26.9, 88.0], [27.0, 88.0], [27.1, 88.0], [27.2, 88.0], [27.3, 88.0], [27.4, 89.0], [27.5, 89.0], [27.6, 89.0], [27.7, 89.0], [27.8, 89.0], [27.9, 89.0], [28.0, 89.0], [28.1, 89.0], [28.2, 89.0], [28.3, 89.0], [28.4, 89.0], [28.5, 89.0], [28.6, 89.0], [28.7, 89.0], [28.8, 89.0], [28.9, 89.0], [29.0, 89.0], [29.1, 89.0], [29.2, 89.0], [29.3, 89.0], [29.4, 89.0], [29.5, 89.0], [29.6, 89.0], [29.7, 89.0], [29.8, 89.0], [29.9, 89.0], [30.0, 89.0], [30.1, 89.0], [30.2, 89.0], [30.3, 89.0], [30.4, 89.0], [30.5, 89.0], [30.6, 89.0], [30.7, 89.0], [30.8, 89.0], [30.9, 89.0], [31.0, 89.0], [31.1, 89.0], [31.2, 89.0], [31.3, 89.0], [31.4, 89.0], [31.5, 89.0], [31.6, 89.0], [31.7, 90.0], [31.8, 90.0], [31.9, 90.0], [32.0, 90.0], [32.1, 90.0], [32.2, 90.0], [32.3, 90.0], [32.4, 90.0], [32.5, 90.0], [32.6, 90.0], [32.7, 90.0], [32.8, 90.0], [32.9, 90.0], [33.0, 90.0], [33.1, 90.0], [33.2, 90.0], [33.3, 90.0], [33.4, 90.0], [33.5, 90.0], [33.6, 90.0], [33.7, 90.0], [33.8, 90.0], [33.9, 90.0], [34.0, 90.0], [34.1, 90.0], [34.2, 90.0], [34.3, 90.0], [34.4, 90.0], [34.5, 90.0], [34.6, 90.0], [34.7, 90.0], [34.8, 90.0], [34.9, 90.0], [35.0, 90.0], [35.1, 90.0], [35.2, 91.0], [35.3, 91.0], [35.4, 91.0], [35.5, 91.0], [35.6, 91.0], [35.7, 91.0], [35.8, 91.0], [35.9, 91.0], [36.0, 91.0], [36.1, 91.0], [36.2, 91.0], [36.3, 91.0], [36.4, 91.0], [36.5, 91.0], [36.6, 91.0], [36.7, 91.0], [36.8, 91.0], [36.9, 91.0], [37.0, 91.0], [37.1, 91.0], [37.2, 91.0], [37.3, 91.0], [37.4, 91.0], [37.5, 91.0], [37.6, 91.0], [37.7, 91.0], [37.8, 91.0], [37.9, 91.0], [38.0, 91.0], [38.1, 91.0], [38.2, 91.0], [38.3, 91.0], [38.4, 91.0], [38.5, 91.0], [38.6, 91.0], [38.7, 91.0], [38.8, 91.0], [38.9, 91.0], [39.0, 91.0], [39.1, 92.0], [39.2, 92.0], [39.3, 92.0], [39.4, 92.0], [39.5, 92.0], [39.6, 92.0], [39.7, 92.0], [39.8, 92.0], [39.9, 92.0], [40.0, 92.0], [40.1, 92.0], [40.2, 92.0], [40.3, 92.0], [40.4, 92.0], [40.5, 92.0], [40.6, 92.0], [40.7, 92.0], [40.8, 92.0], [40.9, 92.0], [41.0, 92.0], [41.1, 92.0], [41.2, 92.0], [41.3, 92.0], [41.4, 92.0], [41.5, 92.0], [41.6, 92.0], [41.7, 92.0], [41.8, 92.0], [41.9, 92.0], [42.0, 92.0], [42.1, 92.0], [42.2, 92.0], [42.3, 92.0], [42.4, 92.0], [42.5, 92.0], [42.6, 92.0], [42.7, 92.0], [42.8, 92.0], [42.9, 93.0], [43.0, 93.0], [43.1, 93.0], [43.2, 93.0], [43.3, 93.0], [43.4, 93.0], [43.5, 93.0], [43.6, 93.0], [43.7, 93.0], [43.8, 93.0], [43.9, 93.0], [44.0, 93.0], [44.1, 93.0], [44.2, 93.0], [44.3, 93.0], [44.4, 93.0], [44.5, 93.0], [44.6, 93.0], [44.7, 93.0], [44.8, 93.0], [44.9, 93.0], [45.0, 93.0], [45.1, 93.0], [45.2, 93.0], [45.3, 93.0], [45.4, 93.0], [45.5, 93.0], [45.6, 93.0], [45.7, 93.0], [45.8, 93.0], [45.9, 93.0], [46.0, 93.0], [46.1, 94.0], [46.2, 94.0], [46.3, 94.0], [46.4, 94.0], [46.5, 94.0], [46.6, 94.0], [46.7, 94.0], [46.8, 94.0], [46.9, 94.0], [47.0, 94.0], [47.1, 94.0], [47.2, 94.0], [47.3, 94.0], [47.4, 94.0], [47.5, 94.0], [47.6, 94.0], [47.7, 94.0], [47.8, 94.0], [47.9, 94.0], [48.0, 94.0], [48.1, 94.0], [48.2, 94.0], [48.3, 94.0], [48.4, 94.0], [48.5, 94.0], [48.6, 94.0], [48.7, 94.0], [48.8, 94.0], [48.9, 94.0], [49.0, 94.0], [49.1, 94.0], [49.2, 95.0], [49.3, 95.0], [49.4, 95.0], [49.5, 95.0], [49.6, 95.0], [49.7, 95.0], [49.8, 95.0], [49.9, 95.0], [50.0, 95.0], [50.1, 95.0], [50.2, 95.0], [50.3, 95.0], [50.4, 95.0], [50.5, 95.0], [50.6, 95.0], [50.7, 95.0], [50.8, 95.0], [50.9, 95.0], [51.0, 95.0], [51.1, 95.0], [51.2, 95.0], [51.3, 95.0], [51.4, 95.0], [51.5, 95.0], [51.6, 95.0], [51.7, 95.0], [51.8, 95.0], [51.9, 95.0], [52.0, 95.0], [52.1, 96.0], [52.2, 96.0], [52.3, 96.0], [52.4, 96.0], [52.5, 96.0], [52.6, 96.0], [52.7, 96.0], [52.8, 96.0], [52.9, 96.0], [53.0, 96.0], [53.1, 96.0], [53.2, 96.0], [53.3, 96.0], [53.4, 96.0], [53.5, 96.0], [53.6, 96.0], [53.7, 96.0], [53.8, 96.0], [53.9, 96.0], [54.0, 96.0], [54.1, 96.0], [54.2, 96.0], [54.3, 96.0], [54.4, 96.0], [54.5, 96.0], [54.6, 96.0], [54.7, 96.0], [54.8, 97.0], [54.9, 97.0], [55.0, 97.0], [55.1, 97.0], [55.2, 97.0], [55.3, 97.0], [55.4, 97.0], [55.5, 97.0], [55.6, 97.0], [55.7, 97.0], [55.8, 97.0], [55.9, 97.0], [56.0, 97.0], [56.1, 97.0], [56.2, 97.0], [56.3, 97.0], [56.4, 97.0], [56.5, 97.0], [56.6, 97.0], [56.7, 97.0], [56.8, 97.0], [56.9, 97.0], [57.0, 98.0], [57.1, 98.0], [57.2, 98.0], [57.3, 98.0], [57.4, 98.0], [57.5, 98.0], [57.6, 98.0], [57.7, 98.0], [57.8, 98.0], [57.9, 98.0], [58.0, 98.0], [58.1, 98.0], [58.2, 98.0], [58.3, 98.0], [58.4, 98.0], [58.5, 98.0], [58.6, 98.0], [58.7, 99.0], [58.8, 99.0], [58.9, 99.0], [59.0, 99.0], [59.1, 99.0], [59.2, 99.0], [59.3, 99.0], [59.4, 99.0], [59.5, 99.0], [59.6, 99.0], [59.7, 99.0], [59.8, 99.0], [59.9, 99.0], [60.0, 99.0], [60.1, 99.0], [60.2, 99.0], [60.3, 99.0], [60.4, 99.0], [60.5, 99.0], [60.6, 99.0], [60.7, 99.0], [60.8, 100.0], [60.9, 100.0], [61.0, 100.0], [61.1, 100.0], [61.2, 100.0], [61.3, 100.0], [61.4, 100.0], [61.5, 100.0], [61.6, 100.0], [61.7, 100.0], [61.8, 100.0], [61.9, 100.0], [62.0, 100.0], [62.1, 100.0], [62.2, 100.0], [62.3, 100.0], [62.4, 101.0], [62.5, 101.0], [62.6, 101.0], [62.7, 101.0], [62.8, 101.0], [62.9, 101.0], [63.0, 101.0], [63.1, 101.0], [63.2, 101.0], [63.3, 101.0], [63.4, 101.0], [63.5, 101.0], [63.6, 101.0], [63.7, 101.0], [63.8, 101.0], [63.9, 101.0], [64.0, 101.0], [64.1, 101.0], [64.2, 101.0], [64.3, 102.0], [64.4, 102.0], [64.5, 102.0], [64.6, 102.0], [64.7, 102.0], [64.8, 102.0], [64.9, 102.0], [65.0, 102.0], [65.1, 102.0], [65.2, 102.0], [65.3, 102.0], [65.4, 102.0], [65.5, 102.0], [65.6, 103.0], [65.7, 103.0], [65.8, 103.0], [65.9, 103.0], [66.0, 103.0], [66.1, 103.0], [66.2, 103.0], [66.3, 103.0], [66.4, 103.0], [66.5, 103.0], [66.6, 103.0], [66.7, 103.0], [66.8, 103.0], [66.9, 103.0], [67.0, 103.0], [67.1, 104.0], [67.2, 104.0], [67.3, 104.0], [67.4, 104.0], [67.5, 104.0], [67.6, 104.0], [67.7, 104.0], [67.8, 104.0], [67.9, 104.0], [68.0, 104.0], [68.1, 104.0], [68.2, 104.0], [68.3, 105.0], [68.4, 105.0], [68.5, 105.0], [68.6, 105.0], [68.7, 105.0], [68.8, 105.0], [68.9, 105.0], [69.0, 105.0], [69.1, 106.0], [69.2, 106.0], [69.3, 106.0], [69.4, 106.0], [69.5, 106.0], [69.6, 106.0], [69.7, 106.0], [69.8, 106.0], [69.9, 106.0], [70.0, 107.0], [70.1, 107.0], [70.2, 107.0], [70.3, 107.0], [70.4, 107.0], [70.5, 107.0], [70.6, 107.0], [70.7, 107.0], [70.8, 107.0], [70.9, 108.0], [71.0, 108.0], [71.1, 108.0], [71.2, 108.0], [71.3, 108.0], [71.4, 108.0], [71.5, 108.0], [71.6, 108.0], [71.7, 108.0], [71.8, 109.0], [71.9, 109.0], [72.0, 109.0], [72.1, 109.0], [72.2, 109.0], [72.3, 109.0], [72.4, 109.0], [72.5, 109.0], [72.6, 110.0], [72.7, 110.0], [72.8, 110.0], [72.9, 110.0], [73.0, 110.0], [73.1, 110.0], [73.2, 110.0], [73.3, 110.0], [73.4, 110.0], [73.5, 111.0], [73.6, 111.0], [73.7, 111.0], [73.8, 111.0], [73.9, 111.0], [74.0, 111.0], [74.1, 111.0], [74.2, 111.0], [74.3, 111.0], [74.4, 112.0], [74.5, 112.0], [74.6, 112.0], [74.7, 112.0], [74.8, 112.0], [74.9, 112.0], [75.0, 112.0], [75.1, 113.0], [75.2, 113.0], [75.3, 113.0], [75.4, 113.0], [75.5, 113.0], [75.6, 113.0], [75.7, 113.0], [75.8, 114.0], [75.9, 114.0], [76.0, 114.0], [76.1, 114.0], [76.2, 114.0], [76.3, 114.0], [76.4, 114.0], [76.5, 114.0], [76.6, 115.0], [76.7, 115.0], [76.8, 115.0], [76.9, 115.0], [77.0, 115.0], [77.1, 115.0], [77.2, 116.0], [77.3, 116.0], [77.4, 116.0], [77.5, 116.0], [77.6, 116.0], [77.7, 116.0], [77.8, 116.0], [77.9, 116.0], [78.0, 117.0], [78.1, 117.0], [78.2, 117.0], [78.3, 117.0], [78.4, 117.0], [78.5, 117.0], [78.6, 117.0], [78.7, 117.0], [78.8, 118.0], [78.9, 118.0], [79.0, 118.0], [79.1, 118.0], [79.2, 118.0], [79.3, 119.0], [79.4, 119.0], [79.5, 119.0], [79.6, 120.0], [79.7, 120.0], [79.8, 120.0], [79.9, 120.0], [80.0, 120.0], [80.1, 120.0], [80.2, 121.0], [80.3, 121.0], [80.4, 121.0], [80.5, 121.0], [80.6, 121.0], [80.7, 122.0], [80.8, 122.0], [80.9, 122.0], [81.0, 122.0], [81.1, 122.0], [81.2, 122.0], [81.3, 123.0], [81.4, 123.0], [81.5, 123.0], [81.6, 123.0], [81.7, 123.0], [81.8, 123.0], [81.9, 124.0], [82.0, 124.0], [82.1, 124.0], [82.2, 124.0], [82.3, 124.0], [82.4, 125.0], [82.5, 125.0], [82.6, 125.0], [82.7, 126.0], [82.8, 126.0], [82.9, 126.0], [83.0, 126.0], [83.1, 126.0], [83.2, 127.0], [83.3, 127.0], [83.4, 127.0], [83.5, 127.0], [83.6, 127.0], [83.7, 128.0], [83.8, 128.0], [83.9, 128.0], [84.0, 128.0], [84.1, 129.0], [84.2, 129.0], [84.3, 129.0], [84.4, 130.0], [84.5, 130.0], [84.6, 131.0], [84.7, 131.0], [84.8, 131.0], [84.9, 132.0], [85.0, 132.0], [85.1, 132.0], [85.2, 133.0], [85.3, 133.0], [85.4, 133.0], [85.5, 134.0], [85.6, 134.0], [85.7, 134.0], [85.8, 134.0], [85.9, 135.0], [86.0, 135.0], [86.1, 136.0], [86.2, 136.0], [86.3, 136.0], [86.4, 136.0], [86.5, 137.0], [86.6, 137.0], [86.7, 137.0], [86.8, 138.0], [86.9, 138.0], [87.0, 138.0], [87.1, 138.0], [87.2, 139.0], [87.3, 139.0], [87.4, 140.0], [87.5, 140.0], [87.6, 140.0], [87.7, 141.0], [87.8, 141.0], [87.9, 141.0], [88.0, 142.0], [88.1, 142.0], [88.2, 142.0], [88.3, 143.0], [88.4, 143.0], [88.5, 143.0], [88.6, 143.0], [88.7, 144.0], [88.8, 144.0], [88.9, 145.0], [89.0, 145.0], [89.1, 145.0], [89.2, 146.0], [89.3, 146.0], [89.4, 147.0], [89.5, 147.0], [89.6, 147.0], [89.7, 148.0], [89.8, 148.0], [89.9, 148.0], [90.0, 149.0], [90.1, 149.0], [90.2, 149.0], [90.3, 150.0], [90.4, 150.0], [90.5, 151.0], [90.6, 151.0], [90.7, 151.0], [90.8, 152.0], [90.9, 152.0], [91.0, 153.0], [91.1, 153.0], [91.2, 154.0], [91.3, 154.0], [91.4, 155.0], [91.5, 155.0], [91.6, 155.0], [91.7, 156.0], [91.8, 156.0], [91.9, 157.0], [92.0, 157.0], [92.1, 158.0], [92.2, 159.0], [92.3, 159.0], [92.4, 159.0], [92.5, 160.0], [92.6, 161.0], [92.7, 162.0], [92.8, 162.0], [92.9, 163.0], [93.0, 163.0], [93.1, 164.0], [93.2, 165.0], [93.3, 165.0], [93.4, 166.0], [93.5, 166.0], [93.6, 167.0], [93.7, 168.0], [93.8, 168.0], [93.9, 169.0], [94.0, 170.0], [94.1, 171.0], [94.2, 173.0], [94.3, 174.0], [94.4, 175.0], [94.5, 176.0], [94.6, 177.0], [94.7, 179.0], [94.8, 181.0], [94.9, 182.0], [95.0, 185.0], [95.1, 186.0], [95.2, 189.0], [95.3, 191.0], [95.4, 192.0], [95.5, 194.0], [95.6, 195.0], [95.7, 196.0], [95.8, 197.0], [95.9, 198.0], [96.0, 200.0], [96.1, 203.0], [96.2, 204.0], [96.3, 206.0], [96.4, 209.0], [96.5, 210.0], [96.6, 215.0], [96.7, 220.0], [96.8, 224.0], [96.9, 225.0], [97.0, 231.0], [97.1, 237.0], [97.2, 240.0], [97.3, 244.0], [97.4, 249.0], [97.5, 252.0], [97.6, 258.0], [97.7, 262.0], [97.8, 268.0], [97.9, 271.0], [98.0, 274.0], [98.1, 289.0], [98.2, 310.0], [98.3, 323.0], [98.4, 329.0], [98.5, 334.0], [98.6, 346.0], [98.7, 364.0], [98.8, 388.0], [98.9, 398.0], [99.0, 413.0], [99.1, 449.0], [99.2, 504.0], [99.3, 527.0], [99.4, 539.0], [99.5, 549.0], [99.6, 584.0], [99.7, 633.0], [99.8, 724.0], [99.9, 1019.0], [100.0, 2509.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2833.0, "series": [{"data": [[0.0, 2833.0], [600.0, 7.0], [2500.0, 1.0], [700.0, 4.0], [200.0, 105.0], [900.0, 1.0], [1000.0, 2.0], [1100.0, 1.0], [300.0, 34.0], [1200.0, 1.0], [100.0, 1642.0], [400.0, 13.0], [1600.0, 1.0], [500.0, 20.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4627.0, "series": [{"data": [[0.0, 4627.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 36.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 2.8621236133122054, "minX": 1.5385791E12, "maxY": 3.0, "series": [{"data": [[1.53857922E12, 3.0], [1.5385791E12, 2.8621236133122054], [1.53857928E12, 2.996954314720812], [1.53857916E12, 3.0]], "isOverall": false, "label": "ServerlessInvoke", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53857928E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 95.0857142857143, "minX": 1.0, "maxY": 334.99999999999994, "series": [{"data": [[1.0, 334.99999999999994], [2.0, 95.0857142857143], [3.0, 112.99127589967271]], "isOverall": false, "label": "Home Page", "isController": false}, {"data": [[2.9807073954983876, 113.19849946409444]], "isOverall": false, "label": "Home Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2734.3333333333335, "minX": 1.5385791E12, "maxY": 15406.583333333334, "series": [{"data": [[1.53857922E12, 15406.583333333334], [1.5385791E12, 6097.3], [1.53857928E12, 9492.65], [1.53857916E12, 13784.266666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.53857922E12, 6981.0], [1.5385791E12, 2734.3333333333335], [1.53857928E12, 4268.333333333333], [1.53857916E12, 6231.333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53857928E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 101.50355329949234, "minX": 1.5385791E12, "maxY": 124.846314325452, "series": [{"data": [[1.53857922E12, 111.33829919304786], [1.5385791E12, 109.65927099841512], [1.53857928E12, 101.50355329949234], [1.53857916E12, 124.846314325452]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53857928E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 101.29340101522845, "minX": 1.5385791E12, "maxY": 124.53685674547987, "series": [{"data": [[1.53857922E12, 111.09869646182504], [1.5385791E12, 109.47068145800313], [1.53857928E12, 101.29340101522845], [1.53857916E12, 124.53685674547987]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53857928E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 61.22503961965131, "minX": 1.5385791E12, "maxY": 81.64812239221138, "series": [{"data": [[1.53857922E12, 71.41278708876487], [1.5385791E12, 61.22503961965131], [1.53857928E12, 65.01624365482222], [1.53857916E12, 81.64812239221138]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53857928E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 77.0, "minX": 1.5385791E12, "maxY": 2509.0, "series": [{"data": [[1.53857922E12, 1202.0], [1.5385791E12, 2509.0], [1.53857928E12, 526.0], [1.53857916E12, 716.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.53857922E12, 77.0], [1.5385791E12, 78.0], [1.53857928E12, 79.0], [1.53857916E12, 78.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.53857922E12, 153.9000000000001], [1.5385791E12, 108.0], [1.53857928E12, 149.0], [1.53857916E12, 162.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.53857922E12, 505.3300000000004], [1.5385791E12, 603.0799999999972], [1.53857928E12, 414.7000000000007], [1.53857916E12, 526.1000000000013]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.53857922E12, 196.94999999999982], [1.5385791E12, 133.79999999999995], [1.53857928E12, 185.0], [1.53857916E12, 211.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53857928E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 94.0, "minX": 1000.0, "maxY": 138.0, "series": [{"data": [[3000.0, 138.0], [1000.0, 94.0], [2000.0, 116.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 3000.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.create();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 94.0, "minX": 1000.0, "maxY": 138.0, "series": [{"data": [[3000.0, 138.0], [1000.0, 94.0], [2000.0, 116.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 3000.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 10.566666666666666, "minX": 1.5385791E12, "maxY": 26.85, "series": [{"data": [[1.53857922E12, 26.85], [1.5385791E12, 10.566666666666666], [1.53857928E12, 16.366666666666667], [1.53857916E12, 23.966666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53857928E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 10.516666666666667, "minX": 1.5385791E12, "maxY": 26.85, "series": [{"data": [[1.53857922E12, 26.85], [1.5385791E12, 10.516666666666667], [1.53857928E12, 16.416666666666668], [1.53857916E12, 23.966666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53857928E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 10.516666666666667, "minX": 1.5385791E12, "maxY": 26.85, "series": [{"data": [[1.53857922E12, 26.85], [1.5385791E12, 10.516666666666667], [1.53857928E12, 16.416666666666668], [1.53857916E12, 23.966666666666665]], "isOverall": false, "label": "Home Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53857928E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 10.516666666666667, "minX": 1.5385791E12, "maxY": 26.85, "series": [{"data": [[1.53857922E12, 26.85], [1.5385791E12, 10.516666666666667], [1.53857928E12, 16.416666666666668], [1.53857916E12, 23.966666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53857928E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "responseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    choiceContainer.find("label").each(function(){
        this.style.color = color;
    });
}

