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
        data: {"result": {"minY": 134.0, "minX": 0.0, "maxY": 3153.0, "series": [{"data": [[0.0, 134.0], [0.1, 135.0], [0.2, 135.0], [0.3, 135.0], [0.4, 136.0], [0.5, 136.0], [0.6, 136.0], [0.7, 136.0], [0.8, 136.0], [0.9, 136.0], [1.0, 136.0], [1.1, 136.0], [1.2, 136.0], [1.3, 136.0], [1.4, 136.0], [1.5, 136.0], [1.6, 137.0], [1.7, 137.0], [1.8, 137.0], [1.9, 137.0], [2.0, 137.0], [2.1, 137.0], [2.2, 137.0], [2.3, 137.0], [2.4, 137.0], [2.5, 137.0], [2.6, 137.0], [2.7, 137.0], [2.8, 137.0], [2.9, 137.0], [3.0, 137.0], [3.1, 137.0], [3.2, 137.0], [3.3, 137.0], [3.4, 137.0], [3.5, 137.0], [3.6, 137.0], [3.7, 137.0], [3.8, 137.0], [3.9, 137.0], [4.0, 138.0], [4.1, 138.0], [4.2, 138.0], [4.3, 138.0], [4.4, 138.0], [4.5, 138.0], [4.6, 138.0], [4.7, 138.0], [4.8, 138.0], [4.9, 138.0], [5.0, 138.0], [5.1, 138.0], [5.2, 138.0], [5.3, 138.0], [5.4, 138.0], [5.5, 138.0], [5.6, 138.0], [5.7, 138.0], [5.8, 138.0], [5.9, 138.0], [6.0, 138.0], [6.1, 138.0], [6.2, 138.0], [6.3, 138.0], [6.4, 138.0], [6.5, 138.0], [6.6, 138.0], [6.7, 138.0], [6.8, 138.0], [6.9, 138.0], [7.0, 138.0], [7.1, 138.0], [7.2, 138.0], [7.3, 138.0], [7.4, 138.0], [7.5, 138.0], [7.6, 138.0], [7.7, 138.0], [7.8, 138.0], [7.9, 139.0], [8.0, 139.0], [8.1, 139.0], [8.2, 139.0], [8.3, 139.0], [8.4, 139.0], [8.5, 139.0], [8.6, 139.0], [8.7, 139.0], [8.8, 139.0], [8.9, 139.0], [9.0, 139.0], [9.1, 139.0], [9.2, 139.0], [9.3, 139.0], [9.4, 139.0], [9.5, 139.0], [9.6, 139.0], [9.7, 139.0], [9.8, 139.0], [9.9, 139.0], [10.0, 139.0], [10.1, 139.0], [10.2, 139.0], [10.3, 139.0], [10.4, 139.0], [10.5, 139.0], [10.6, 139.0], [10.7, 139.0], [10.8, 139.0], [10.9, 139.0], [11.0, 139.0], [11.1, 139.0], [11.2, 139.0], [11.3, 139.0], [11.4, 139.0], [11.5, 139.0], [11.6, 139.0], [11.7, 139.0], [11.8, 139.0], [11.9, 139.0], [12.0, 139.0], [12.1, 139.0], [12.2, 139.0], [12.3, 139.0], [12.4, 139.0], [12.5, 139.0], [12.6, 139.0], [12.7, 139.0], [12.8, 139.0], [12.9, 139.0], [13.0, 140.0], [13.1, 140.0], [13.2, 140.0], [13.3, 140.0], [13.4, 140.0], [13.5, 140.0], [13.6, 140.0], [13.7, 140.0], [13.8, 140.0], [13.9, 140.0], [14.0, 140.0], [14.1, 140.0], [14.2, 140.0], [14.3, 140.0], [14.4, 140.0], [14.5, 140.0], [14.6, 140.0], [14.7, 140.0], [14.8, 140.0], [14.9, 140.0], [15.0, 140.0], [15.1, 140.0], [15.2, 140.0], [15.3, 140.0], [15.4, 140.0], [15.5, 140.0], [15.6, 140.0], [15.7, 140.0], [15.8, 140.0], [15.9, 140.0], [16.0, 140.0], [16.1, 140.0], [16.2, 140.0], [16.3, 140.0], [16.4, 140.0], [16.5, 140.0], [16.6, 140.0], [16.7, 140.0], [16.8, 140.0], [16.9, 140.0], [17.0, 140.0], [17.1, 140.0], [17.2, 140.0], [17.3, 140.0], [17.4, 140.0], [17.5, 140.0], [17.6, 140.0], [17.7, 140.0], [17.8, 140.0], [17.9, 140.0], [18.0, 140.0], [18.1, 140.0], [18.2, 140.0], [18.3, 140.0], [18.4, 140.0], [18.5, 140.0], [18.6, 140.0], [18.7, 140.0], [18.8, 140.0], [18.9, 140.0], [19.0, 140.0], [19.1, 140.0], [19.2, 140.0], [19.3, 140.0], [19.4, 141.0], [19.5, 141.0], [19.6, 141.0], [19.7, 141.0], [19.8, 141.0], [19.9, 141.0], [20.0, 141.0], [20.1, 141.0], [20.2, 141.0], [20.3, 141.0], [20.4, 141.0], [20.5, 141.0], [20.6, 141.0], [20.7, 141.0], [20.8, 141.0], [20.9, 141.0], [21.0, 141.0], [21.1, 141.0], [21.2, 141.0], [21.3, 141.0], [21.4, 141.0], [21.5, 141.0], [21.6, 141.0], [21.7, 141.0], [21.8, 141.0], [21.9, 141.0], [22.0, 141.0], [22.1, 141.0], [22.2, 141.0], [22.3, 141.0], [22.4, 141.0], [22.5, 141.0], [22.6, 141.0], [22.7, 141.0], [22.8, 141.0], [22.9, 141.0], [23.0, 141.0], [23.1, 141.0], [23.2, 141.0], [23.3, 141.0], [23.4, 141.0], [23.5, 141.0], [23.6, 141.0], [23.7, 141.0], [23.8, 141.0], [23.9, 141.0], [24.0, 141.0], [24.1, 141.0], [24.2, 141.0], [24.3, 141.0], [24.4, 141.0], [24.5, 141.0], [24.6, 141.0], [24.7, 141.0], [24.8, 141.0], [24.9, 141.0], [25.0, 141.0], [25.1, 141.0], [25.2, 141.0], [25.3, 141.0], [25.4, 141.0], [25.5, 141.0], [25.6, 141.0], [25.7, 141.0], [25.8, 141.0], [25.9, 141.0], [26.0, 141.0], [26.1, 141.0], [26.2, 142.0], [26.3, 142.0], [26.4, 142.0], [26.5, 142.0], [26.6, 142.0], [26.7, 142.0], [26.8, 142.0], [26.9, 142.0], [27.0, 142.0], [27.1, 142.0], [27.2, 142.0], [27.3, 142.0], [27.4, 142.0], [27.5, 142.0], [27.6, 142.0], [27.7, 142.0], [27.8, 142.0], [27.9, 142.0], [28.0, 142.0], [28.1, 142.0], [28.2, 142.0], [28.3, 142.0], [28.4, 142.0], [28.5, 142.0], [28.6, 142.0], [28.7, 142.0], [28.8, 142.0], [28.9, 142.0], [29.0, 142.0], [29.1, 142.0], [29.2, 142.0], [29.3, 142.0], [29.4, 142.0], [29.5, 142.0], [29.6, 142.0], [29.7, 142.0], [29.8, 142.0], [29.9, 142.0], [30.0, 142.0], [30.1, 142.0], [30.2, 142.0], [30.3, 142.0], [30.4, 142.0], [30.5, 142.0], [30.6, 142.0], [30.7, 142.0], [30.8, 142.0], [30.9, 142.0], [31.0, 142.0], [31.1, 142.0], [31.2, 142.0], [31.3, 142.0], [31.4, 142.0], [31.5, 142.0], [31.6, 142.0], [31.7, 142.0], [31.8, 142.0], [31.9, 142.0], [32.0, 142.0], [32.1, 142.0], [32.2, 142.0], [32.3, 142.0], [32.4, 142.0], [32.5, 142.0], [32.6, 142.0], [32.7, 142.0], [32.8, 142.0], [32.9, 142.0], [33.0, 142.0], [33.1, 142.0], [33.2, 142.0], [33.3, 142.0], [33.4, 142.0], [33.5, 142.0], [33.6, 142.0], [33.7, 143.0], [33.8, 143.0], [33.9, 143.0], [34.0, 143.0], [34.1, 143.0], [34.2, 143.0], [34.3, 143.0], [34.4, 143.0], [34.5, 143.0], [34.6, 143.0], [34.7, 143.0], [34.8, 143.0], [34.9, 143.0], [35.0, 143.0], [35.1, 143.0], [35.2, 143.0], [35.3, 143.0], [35.4, 143.0], [35.5, 143.0], [35.6, 143.0], [35.7, 143.0], [35.8, 143.0], [35.9, 143.0], [36.0, 143.0], [36.1, 143.0], [36.2, 143.0], [36.3, 143.0], [36.4, 143.0], [36.5, 143.0], [36.6, 143.0], [36.7, 143.0], [36.8, 143.0], [36.9, 143.0], [37.0, 143.0], [37.1, 143.0], [37.2, 143.0], [37.3, 143.0], [37.4, 143.0], [37.5, 143.0], [37.6, 143.0], [37.7, 143.0], [37.8, 143.0], [37.9, 143.0], [38.0, 143.0], [38.1, 143.0], [38.2, 143.0], [38.3, 143.0], [38.4, 143.0], [38.5, 143.0], [38.6, 143.0], [38.7, 143.0], [38.8, 143.0], [38.9, 143.0], [39.0, 143.0], [39.1, 143.0], [39.2, 143.0], [39.3, 143.0], [39.4, 143.0], [39.5, 143.0], [39.6, 143.0], [39.7, 143.0], [39.8, 143.0], [39.9, 143.0], [40.0, 143.0], [40.1, 143.0], [40.2, 144.0], [40.3, 144.0], [40.4, 144.0], [40.5, 144.0], [40.6, 144.0], [40.7, 144.0], [40.8, 144.0], [40.9, 144.0], [41.0, 144.0], [41.1, 144.0], [41.2, 144.0], [41.3, 144.0], [41.4, 144.0], [41.5, 144.0], [41.6, 144.0], [41.7, 144.0], [41.8, 144.0], [41.9, 144.0], [42.0, 144.0], [42.1, 144.0], [42.2, 144.0], [42.3, 144.0], [42.4, 144.0], [42.5, 144.0], [42.6, 144.0], [42.7, 144.0], [42.8, 144.0], [42.9, 144.0], [43.0, 144.0], [43.1, 144.0], [43.2, 144.0], [43.3, 144.0], [43.4, 144.0], [43.5, 144.0], [43.6, 144.0], [43.7, 144.0], [43.8, 144.0], [43.9, 144.0], [44.0, 144.0], [44.1, 144.0], [44.2, 144.0], [44.3, 144.0], [44.4, 144.0], [44.5, 144.0], [44.6, 144.0], [44.7, 144.0], [44.8, 144.0], [44.9, 144.0], [45.0, 144.0], [45.1, 144.0], [45.2, 144.0], [45.3, 144.0], [45.4, 144.0], [45.5, 145.0], [45.6, 145.0], [45.7, 145.0], [45.8, 145.0], [45.9, 145.0], [46.0, 145.0], [46.1, 145.0], [46.2, 145.0], [46.3, 145.0], [46.4, 145.0], [46.5, 145.0], [46.6, 145.0], [46.7, 145.0], [46.8, 145.0], [46.9, 145.0], [47.0, 145.0], [47.1, 145.0], [47.2, 145.0], [47.3, 145.0], [47.4, 145.0], [47.5, 145.0], [47.6, 145.0], [47.7, 145.0], [47.8, 145.0], [47.9, 145.0], [48.0, 145.0], [48.1, 145.0], [48.2, 145.0], [48.3, 145.0], [48.4, 145.0], [48.5, 145.0], [48.6, 145.0], [48.7, 145.0], [48.8, 145.0], [48.9, 145.0], [49.0, 145.0], [49.1, 145.0], [49.2, 145.0], [49.3, 145.0], [49.4, 145.0], [49.5, 145.0], [49.6, 145.0], [49.7, 145.0], [49.8, 146.0], [49.9, 146.0], [50.0, 146.0], [50.1, 146.0], [50.2, 146.0], [50.3, 146.0], [50.4, 146.0], [50.5, 146.0], [50.6, 146.0], [50.7, 146.0], [50.8, 146.0], [50.9, 146.0], [51.0, 146.0], [51.1, 146.0], [51.2, 146.0], [51.3, 146.0], [51.4, 146.0], [51.5, 146.0], [51.6, 146.0], [51.7, 146.0], [51.8, 146.0], [51.9, 146.0], [52.0, 146.0], [52.1, 146.0], [52.2, 146.0], [52.3, 146.0], [52.4, 146.0], [52.5, 146.0], [52.6, 146.0], [52.7, 146.0], [52.8, 146.0], [52.9, 146.0], [53.0, 146.0], [53.1, 146.0], [53.2, 146.0], [53.3, 146.0], [53.4, 146.0], [53.5, 146.0], [53.6, 146.0], [53.7, 147.0], [53.8, 147.0], [53.9, 147.0], [54.0, 147.0], [54.1, 147.0], [54.2, 147.0], [54.3, 147.0], [54.4, 147.0], [54.5, 147.0], [54.6, 147.0], [54.7, 147.0], [54.8, 147.0], [54.9, 147.0], [55.0, 147.0], [55.1, 147.0], [55.2, 147.0], [55.3, 147.0], [55.4, 147.0], [55.5, 147.0], [55.6, 147.0], [55.7, 147.0], [55.8, 147.0], [55.9, 147.0], [56.0, 147.0], [56.1, 147.0], [56.2, 147.0], [56.3, 147.0], [56.4, 147.0], [56.5, 147.0], [56.6, 147.0], [56.7, 148.0], [56.8, 148.0], [56.9, 148.0], [57.0, 148.0], [57.1, 148.0], [57.2, 148.0], [57.3, 148.0], [57.4, 148.0], [57.5, 148.0], [57.6, 148.0], [57.7, 148.0], [57.8, 148.0], [57.9, 148.0], [58.0, 148.0], [58.1, 148.0], [58.2, 148.0], [58.3, 148.0], [58.4, 148.0], [58.5, 148.0], [58.6, 148.0], [58.7, 148.0], [58.8, 148.0], [58.9, 148.0], [59.0, 148.0], [59.1, 148.0], [59.2, 148.0], [59.3, 148.0], [59.4, 148.0], [59.5, 148.0], [59.6, 148.0], [59.7, 149.0], [59.8, 149.0], [59.9, 149.0], [60.0, 149.0], [60.1, 149.0], [60.2, 149.0], [60.3, 149.0], [60.4, 149.0], [60.5, 149.0], [60.6, 149.0], [60.7, 149.0], [60.8, 149.0], [60.9, 149.0], [61.0, 149.0], [61.1, 149.0], [61.2, 149.0], [61.3, 149.0], [61.4, 149.0], [61.5, 149.0], [61.6, 149.0], [61.7, 149.0], [61.8, 149.0], [61.9, 149.0], [62.0, 149.0], [62.1, 149.0], [62.2, 149.0], [62.3, 149.0], [62.4, 149.0], [62.5, 149.0], [62.6, 149.0], [62.7, 149.0], [62.8, 149.0], [62.9, 149.0], [63.0, 150.0], [63.1, 150.0], [63.2, 150.0], [63.3, 150.0], [63.4, 150.0], [63.5, 150.0], [63.6, 150.0], [63.7, 150.0], [63.8, 150.0], [63.9, 150.0], [64.0, 150.0], [64.1, 150.0], [64.2, 150.0], [64.3, 150.0], [64.4, 150.0], [64.5, 150.0], [64.6, 150.0], [64.7, 150.0], [64.8, 150.0], [64.9, 150.0], [65.0, 150.0], [65.1, 150.0], [65.2, 150.0], [65.3, 150.0], [65.4, 151.0], [65.5, 151.0], [65.6, 151.0], [65.7, 151.0], [65.8, 151.0], [65.9, 151.0], [66.0, 151.0], [66.1, 151.0], [66.2, 151.0], [66.3, 151.0], [66.4, 151.0], [66.5, 151.0], [66.6, 151.0], [66.7, 151.0], [66.8, 151.0], [66.9, 151.0], [67.0, 151.0], [67.1, 151.0], [67.2, 151.0], [67.3, 151.0], [67.4, 151.0], [67.5, 152.0], [67.6, 152.0], [67.7, 152.0], [67.8, 152.0], [67.9, 152.0], [68.0, 152.0], [68.1, 152.0], [68.2, 152.0], [68.3, 152.0], [68.4, 152.0], [68.5, 152.0], [68.6, 152.0], [68.7, 152.0], [68.8, 152.0], [68.9, 152.0], [69.0, 152.0], [69.1, 152.0], [69.2, 152.0], [69.3, 152.0], [69.4, 153.0], [69.5, 153.0], [69.6, 153.0], [69.7, 153.0], [69.8, 153.0], [69.9, 153.0], [70.0, 153.0], [70.1, 153.0], [70.2, 153.0], [70.3, 153.0], [70.4, 153.0], [70.5, 153.0], [70.6, 153.0], [70.7, 153.0], [70.8, 154.0], [70.9, 154.0], [71.0, 154.0], [71.1, 154.0], [71.2, 154.0], [71.3, 154.0], [71.4, 154.0], [71.5, 154.0], [71.6, 154.0], [71.7, 154.0], [71.8, 154.0], [71.9, 154.0], [72.0, 155.0], [72.1, 155.0], [72.2, 155.0], [72.3, 155.0], [72.4, 155.0], [72.5, 155.0], [72.6, 155.0], [72.7, 155.0], [72.8, 155.0], [72.9, 155.0], [73.0, 155.0], [73.1, 155.0], [73.2, 155.0], [73.3, 155.0], [73.4, 155.0], [73.5, 155.0], [73.6, 156.0], [73.7, 156.0], [73.8, 156.0], [73.9, 156.0], [74.0, 156.0], [74.1, 156.0], [74.2, 156.0], [74.3, 156.0], [74.4, 156.0], [74.5, 156.0], [74.6, 157.0], [74.7, 157.0], [74.8, 157.0], [74.9, 157.0], [75.0, 157.0], [75.1, 157.0], [75.2, 157.0], [75.3, 157.0], [75.4, 157.0], [75.5, 157.0], [75.6, 157.0], [75.7, 157.0], [75.8, 157.0], [75.9, 158.0], [76.0, 158.0], [76.1, 158.0], [76.2, 158.0], [76.3, 158.0], [76.4, 158.0], [76.5, 158.0], [76.6, 158.0], [76.7, 158.0], [76.8, 158.0], [76.9, 159.0], [77.0, 159.0], [77.1, 159.0], [77.2, 159.0], [77.3, 159.0], [77.4, 159.0], [77.5, 159.0], [77.6, 160.0], [77.7, 160.0], [77.8, 160.0], [77.9, 160.0], [78.0, 160.0], [78.1, 160.0], [78.2, 160.0], [78.3, 160.0], [78.4, 161.0], [78.5, 161.0], [78.6, 161.0], [78.7, 161.0], [78.8, 161.0], [78.9, 161.0], [79.0, 161.0], [79.1, 161.0], [79.2, 162.0], [79.3, 162.0], [79.4, 162.0], [79.5, 162.0], [79.6, 162.0], [79.7, 162.0], [79.8, 162.0], [79.9, 162.0], [80.0, 163.0], [80.1, 163.0], [80.2, 163.0], [80.3, 163.0], [80.4, 163.0], [80.5, 163.0], [80.6, 163.0], [80.7, 163.0], [80.8, 163.0], [80.9, 164.0], [81.0, 164.0], [81.1, 164.0], [81.2, 164.0], [81.3, 164.0], [81.4, 164.0], [81.5, 164.0], [81.6, 164.0], [81.7, 164.0], [81.8, 164.0], [81.9, 165.0], [82.0, 165.0], [82.1, 165.0], [82.2, 165.0], [82.3, 165.0], [82.4, 165.0], [82.5, 165.0], [82.6, 165.0], [82.7, 165.0], [82.8, 166.0], [82.9, 166.0], [83.0, 166.0], [83.1, 166.0], [83.2, 166.0], [83.3, 166.0], [83.4, 166.0], [83.5, 167.0], [83.6, 167.0], [83.7, 167.0], [83.8, 167.0], [83.9, 167.0], [84.0, 167.0], [84.1, 167.0], [84.2, 167.0], [84.3, 168.0], [84.4, 168.0], [84.5, 168.0], [84.6, 168.0], [84.7, 168.0], [84.8, 169.0], [84.9, 169.0], [85.0, 169.0], [85.1, 169.0], [85.2, 169.0], [85.3, 169.0], [85.4, 170.0], [85.5, 170.0], [85.6, 170.0], [85.7, 170.0], [85.8, 170.0], [85.9, 171.0], [86.0, 171.0], [86.1, 171.0], [86.2, 171.0], [86.3, 171.0], [86.4, 171.0], [86.5, 172.0], [86.6, 172.0], [86.7, 172.0], [86.8, 172.0], [86.9, 172.0], [87.0, 173.0], [87.1, 173.0], [87.2, 173.0], [87.3, 173.0], [87.4, 173.0], [87.5, 173.0], [87.6, 173.0], [87.7, 174.0], [87.8, 174.0], [87.9, 174.0], [88.0, 175.0], [88.1, 175.0], [88.2, 175.0], [88.3, 175.0], [88.4, 176.0], [88.5, 176.0], [88.6, 176.0], [88.7, 177.0], [88.8, 177.0], [88.9, 177.0], [89.0, 178.0], [89.1, 178.0], [89.2, 178.0], [89.3, 178.0], [89.4, 179.0], [89.5, 179.0], [89.6, 179.0], [89.7, 179.0], [89.8, 179.0], [89.9, 180.0], [90.0, 180.0], [90.1, 180.0], [90.2, 181.0], [90.3, 181.0], [90.4, 182.0], [90.5, 182.0], [90.6, 182.0], [90.7, 182.0], [90.8, 183.0], [90.9, 183.0], [91.0, 184.0], [91.1, 184.0], [91.2, 184.0], [91.3, 184.0], [91.4, 185.0], [91.5, 185.0], [91.6, 186.0], [91.7, 186.0], [91.8, 187.0], [91.9, 188.0], [92.0, 188.0], [92.1, 188.0], [92.2, 188.0], [92.3, 189.0], [92.4, 189.0], [92.5, 189.0], [92.6, 189.0], [92.7, 190.0], [92.8, 190.0], [92.9, 191.0], [93.0, 191.0], [93.1, 192.0], [93.2, 193.0], [93.3, 193.0], [93.4, 194.0], [93.5, 194.0], [93.6, 195.0], [93.7, 195.0], [93.8, 196.0], [93.9, 198.0], [94.0, 199.0], [94.1, 201.0], [94.2, 201.0], [94.3, 202.0], [94.4, 203.0], [94.5, 204.0], [94.6, 204.0], [94.7, 205.0], [94.8, 206.0], [94.9, 206.0], [95.0, 207.0], [95.1, 208.0], [95.2, 208.0], [95.3, 209.0], [95.4, 209.0], [95.5, 211.0], [95.6, 211.0], [95.7, 212.0], [95.8, 213.0], [95.9, 214.0], [96.0, 214.0], [96.1, 216.0], [96.2, 218.0], [96.3, 219.0], [96.4, 221.0], [96.5, 221.0], [96.6, 222.0], [96.7, 223.0], [96.8, 224.0], [96.9, 226.0], [97.0, 227.0], [97.1, 231.0], [97.2, 234.0], [97.3, 235.0], [97.4, 240.0], [97.5, 243.0], [97.6, 246.0], [97.7, 248.0], [97.8, 251.0], [97.9, 254.0], [98.0, 258.0], [98.1, 266.0], [98.2, 268.0], [98.3, 268.0], [98.4, 271.0], [98.5, 276.0], [98.6, 289.0], [98.7, 292.0], [98.8, 300.0], [98.9, 308.0], [99.0, 315.0], [99.1, 326.0], [99.2, 336.0], [99.3, 342.0], [99.4, 374.0], [99.5, 424.0], [99.6, 439.0], [99.7, 515.0], [99.8, 625.0], [99.9, 1109.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 3134.0, "series": [{"data": [[1100.0, 1.0], [300.0, 24.0], [600.0, 2.0], [2800.0, 1.0], [700.0, 1.0], [3100.0, 1.0], [200.0, 157.0], [400.0, 7.0], [100.0, 3134.0], [1700.0, 1.0], [1000.0, 1.0], [500.0, 2.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3322.0, "series": [{"data": [[0.0, 3322.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 7.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.9538866930171244, "minX": 1.5385794E12, "maxY": 3.0, "series": [{"data": [[1.53857952E12, 3.0], [1.5385794E12, 2.9538866930171244], [1.53857958E12, 2.9916666666666667], [1.53857946E12, 3.0]], "isOverall": false, "label": "ServerlessInvoke", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53857958E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 157.0790669494093, "minX": 1.0, "maxY": 508.8333333333333, "series": [{"data": [[1.0, 508.8333333333333], [2.0, 283.72], [3.0, 157.0790669494093]], "isOverall": false, "label": "Home Page", "isController": false}, {"data": [[2.988895558223291, 158.66266506602616]], "isOverall": false, "label": "Home Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1008.0, "minX": 1.5385794E12, "maxY": 8089.85, "series": [{"data": [[1.53857952E12, 8089.85], [1.5385794E12, 5199.15], [1.53857958E12, 1644.0], [1.53857946E12, 7891.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.53857952E12, 4960.2], [1.5385794E12, 3187.8], [1.53857958E12, 1008.0], [1.53857946E12, 4838.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53857958E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 152.0186282811179, "minX": 1.5385794E12, "maxY": 174.78787878787875, "series": [{"data": [[1.53857952E12, 152.0186282811179], [1.5385794E12, 174.78787878787875], [1.53857958E12, 153.93749999999997], [1.53857946E12, 155.83420138888903]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53857958E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 152.00084674005095, "minX": 1.5385794E12, "maxY": 174.72463768115955, "series": [{"data": [[1.53857952E12, 152.00084674005095], [1.5385794E12, 174.72463768115955], [1.53857958E12, 153.91666666666674], [1.53857946E12, 155.81163194444443]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53857958E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 104.42916666666673, "minX": 1.5385794E12, "maxY": 120.42555994729895, "series": [{"data": [[1.53857952E12, 109.17273497036416], [1.5385794E12, 120.42555994729895], [1.53857958E12, 104.42916666666673], [1.53857946E12, 111.04166666666684]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53857958E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 134.0, "minX": 1.5385794E12, "maxY": 3153.0, "series": [{"data": [[1.53857952E12, 3153.0], [1.5385794E12, 2880.0], [1.53857958E12, 424.0], [1.53857946E12, 480.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.53857952E12, 135.0], [1.5385794E12, 134.0], [1.53857958E12, 135.0], [1.53857946E12, 135.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.53857952E12, 181.0], [1.5385794E12, 213.0], [1.53857958E12, 180.0], [1.53857946E12, 190.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.53857952E12, 305.2100000000005], [1.5385794E12, 469.3999999999983], [1.53857958E12, 316.34000000000015], [1.53857946E12, 332.2799999999993]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.53857952E12, 207.0], [1.5385794E12, 266.0], [1.53857958E12, 207.0], [1.53857946E12, 221.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53857958E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 145.0, "minX": 1000.0, "maxY": 160.5, "series": [{"data": [[1000.0, 145.0], [2000.0, 160.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 2000.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 145.0, "minX": 1000.0, "maxY": 160.5, "series": [{"data": [[1000.0, 145.0], [2000.0, 160.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 2000.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.95, "minX": 1.5385794E12, "maxY": 19.683333333333334, "series": [{"data": [[1.53857952E12, 19.683333333333334], [1.5385794E12, 12.7], [1.53857958E12, 3.95], [1.53857946E12, 19.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53857958E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.5385794E12, "maxY": 19.683333333333334, "series": [{"data": [[1.53857952E12, 19.683333333333334], [1.5385794E12, 12.65], [1.53857958E12, 4.0], [1.53857946E12, 19.2]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53857958E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.5385794E12, "maxY": 19.683333333333334, "series": [{"data": [[1.53857952E12, 19.683333333333334], [1.5385794E12, 12.65], [1.53857958E12, 4.0], [1.53857946E12, 19.2]], "isOverall": false, "label": "Home Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53857958E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.5385794E12, "maxY": 19.683333333333334, "series": [{"data": [[1.53857952E12, 19.683333333333334], [1.5385794E12, 12.65], [1.53857958E12, 4.0], [1.53857946E12, 19.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53857958E12, "title": "Total Transactions Per Second"}},
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

