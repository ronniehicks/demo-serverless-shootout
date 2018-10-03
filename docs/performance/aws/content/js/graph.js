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
        data: {"result": {"minY": 223.0, "minX": 0.0, "maxY": 1326.0, "series": [{"data": [[0.0, 223.0], [0.1, 225.0], [0.2, 226.0], [0.3, 226.0], [0.4, 226.0], [0.5, 227.0], [0.6, 227.0], [0.7, 227.0], [0.8, 227.0], [0.9, 227.0], [1.0, 227.0], [1.1, 228.0], [1.2, 228.0], [1.3, 228.0], [1.4, 228.0], [1.5, 228.0], [1.6, 228.0], [1.7, 228.0], [1.8, 229.0], [1.9, 229.0], [2.0, 229.0], [2.1, 229.0], [2.2, 229.0], [2.3, 229.0], [2.4, 229.0], [2.5, 229.0], [2.6, 229.0], [2.7, 229.0], [2.8, 230.0], [2.9, 230.0], [3.0, 230.0], [3.1, 230.0], [3.2, 230.0], [3.3, 230.0], [3.4, 230.0], [3.5, 230.0], [3.6, 230.0], [3.7, 230.0], [3.8, 230.0], [3.9, 230.0], [4.0, 230.0], [4.1, 230.0], [4.2, 230.0], [4.3, 230.0], [4.4, 230.0], [4.5, 230.0], [4.6, 231.0], [4.7, 231.0], [4.8, 231.0], [4.9, 231.0], [5.0, 231.0], [5.1, 231.0], [5.2, 231.0], [5.3, 231.0], [5.4, 231.0], [5.5, 231.0], [5.6, 231.0], [5.7, 231.0], [5.8, 231.0], [5.9, 231.0], [6.0, 231.0], [6.1, 231.0], [6.2, 231.0], [6.3, 231.0], [6.4, 231.0], [6.5, 231.0], [6.6, 231.0], [6.7, 232.0], [6.8, 232.0], [6.9, 232.0], [7.0, 232.0], [7.1, 232.0], [7.2, 232.0], [7.3, 232.0], [7.4, 232.0], [7.5, 232.0], [7.6, 232.0], [7.7, 232.0], [7.8, 232.0], [7.9, 232.0], [8.0, 232.0], [8.1, 232.0], [8.2, 232.0], [8.3, 232.0], [8.4, 232.0], [8.5, 232.0], [8.6, 232.0], [8.7, 232.0], [8.8, 232.0], [8.9, 232.0], [9.0, 232.0], [9.1, 232.0], [9.2, 233.0], [9.3, 233.0], [9.4, 233.0], [9.5, 233.0], [9.6, 233.0], [9.7, 233.0], [9.8, 233.0], [9.9, 233.0], [10.0, 233.0], [10.1, 233.0], [10.2, 233.0], [10.3, 233.0], [10.4, 233.0], [10.5, 233.0], [10.6, 233.0], [10.7, 233.0], [10.8, 233.0], [10.9, 233.0], [11.0, 233.0], [11.1, 233.0], [11.2, 233.0], [11.3, 233.0], [11.4, 233.0], [11.5, 233.0], [11.6, 234.0], [11.7, 234.0], [11.8, 234.0], [11.9, 234.0], [12.0, 234.0], [12.1, 234.0], [12.2, 234.0], [12.3, 234.0], [12.4, 234.0], [12.5, 234.0], [12.6, 234.0], [12.7, 234.0], [12.8, 234.0], [12.9, 234.0], [13.0, 234.0], [13.1, 234.0], [13.2, 234.0], [13.3, 234.0], [13.4, 234.0], [13.5, 234.0], [13.6, 234.0], [13.7, 234.0], [13.8, 234.0], [13.9, 234.0], [14.0, 234.0], [14.1, 234.0], [14.2, 234.0], [14.3, 235.0], [14.4, 235.0], [14.5, 235.0], [14.6, 235.0], [14.7, 235.0], [14.8, 235.0], [14.9, 235.0], [15.0, 235.0], [15.1, 235.0], [15.2, 235.0], [15.3, 235.0], [15.4, 235.0], [15.5, 235.0], [15.6, 235.0], [15.7, 235.0], [15.8, 235.0], [15.9, 235.0], [16.0, 235.0], [16.1, 235.0], [16.2, 235.0], [16.3, 235.0], [16.4, 235.0], [16.5, 235.0], [16.6, 235.0], [16.7, 235.0], [16.8, 235.0], [16.9, 235.0], [17.0, 235.0], [17.1, 235.0], [17.2, 235.0], [17.3, 235.0], [17.4, 235.0], [17.5, 236.0], [17.6, 236.0], [17.7, 236.0], [17.8, 236.0], [17.9, 236.0], [18.0, 236.0], [18.1, 236.0], [18.2, 236.0], [18.3, 236.0], [18.4, 236.0], [18.5, 236.0], [18.6, 236.0], [18.7, 236.0], [18.8, 236.0], [18.9, 236.0], [19.0, 236.0], [19.1, 236.0], [19.2, 236.0], [19.3, 236.0], [19.4, 236.0], [19.5, 236.0], [19.6, 236.0], [19.7, 236.0], [19.8, 236.0], [19.9, 236.0], [20.0, 236.0], [20.1, 236.0], [20.2, 236.0], [20.3, 236.0], [20.4, 236.0], [20.5, 236.0], [20.6, 236.0], [20.7, 236.0], [20.8, 236.0], [20.9, 236.0], [21.0, 237.0], [21.1, 237.0], [21.2, 237.0], [21.3, 237.0], [21.4, 237.0], [21.5, 237.0], [21.6, 237.0], [21.7, 237.0], [21.8, 237.0], [21.9, 237.0], [22.0, 237.0], [22.1, 237.0], [22.2, 237.0], [22.3, 237.0], [22.4, 237.0], [22.5, 237.0], [22.6, 237.0], [22.7, 237.0], [22.8, 237.0], [22.9, 237.0], [23.0, 237.0], [23.1, 237.0], [23.2, 237.0], [23.3, 237.0], [23.4, 237.0], [23.5, 237.0], [23.6, 237.0], [23.7, 237.0], [23.8, 237.0], [23.9, 237.0], [24.0, 237.0], [24.1, 237.0], [24.2, 237.0], [24.3, 237.0], [24.4, 237.0], [24.5, 237.0], [24.6, 237.0], [24.7, 238.0], [24.8, 238.0], [24.9, 238.0], [25.0, 238.0], [25.1, 238.0], [25.2, 238.0], [25.3, 238.0], [25.4, 238.0], [25.5, 238.0], [25.6, 238.0], [25.7, 238.0], [25.8, 238.0], [25.9, 238.0], [26.0, 238.0], [26.1, 238.0], [26.2, 238.0], [26.3, 238.0], [26.4, 238.0], [26.5, 238.0], [26.6, 238.0], [26.7, 238.0], [26.8, 238.0], [26.9, 238.0], [27.0, 238.0], [27.1, 238.0], [27.2, 238.0], [27.3, 238.0], [27.4, 238.0], [27.5, 238.0], [27.6, 238.0], [27.7, 238.0], [27.8, 238.0], [27.9, 238.0], [28.0, 238.0], [28.1, 239.0], [28.2, 239.0], [28.3, 239.0], [28.4, 239.0], [28.5, 239.0], [28.6, 239.0], [28.7, 239.0], [28.8, 239.0], [28.9, 239.0], [29.0, 239.0], [29.1, 239.0], [29.2, 239.0], [29.3, 239.0], [29.4, 239.0], [29.5, 239.0], [29.6, 239.0], [29.7, 239.0], [29.8, 239.0], [29.9, 239.0], [30.0, 239.0], [30.1, 239.0], [30.2, 239.0], [30.3, 239.0], [30.4, 239.0], [30.5, 239.0], [30.6, 239.0], [30.7, 239.0], [30.8, 239.0], [30.9, 239.0], [31.0, 239.0], [31.1, 239.0], [31.2, 239.0], [31.3, 240.0], [31.4, 240.0], [31.5, 240.0], [31.6, 240.0], [31.7, 240.0], [31.8, 240.0], [31.9, 240.0], [32.0, 240.0], [32.1, 240.0], [32.2, 240.0], [32.3, 240.0], [32.4, 240.0], [32.5, 240.0], [32.6, 240.0], [32.7, 240.0], [32.8, 240.0], [32.9, 240.0], [33.0, 240.0], [33.1, 240.0], [33.2, 240.0], [33.3, 240.0], [33.4, 240.0], [33.5, 240.0], [33.6, 240.0], [33.7, 240.0], [33.8, 240.0], [33.9, 240.0], [34.0, 240.0], [34.1, 241.0], [34.2, 241.0], [34.3, 241.0], [34.4, 241.0], [34.5, 241.0], [34.6, 241.0], [34.7, 241.0], [34.8, 241.0], [34.9, 241.0], [35.0, 241.0], [35.1, 241.0], [35.2, 241.0], [35.3, 241.0], [35.4, 241.0], [35.5, 241.0], [35.6, 241.0], [35.7, 241.0], [35.8, 241.0], [35.9, 241.0], [36.0, 241.0], [36.1, 241.0], [36.2, 241.0], [36.3, 241.0], [36.4, 242.0], [36.5, 242.0], [36.6, 242.0], [36.7, 242.0], [36.8, 242.0], [36.9, 242.0], [37.0, 242.0], [37.1, 242.0], [37.2, 242.0], [37.3, 242.0], [37.4, 242.0], [37.5, 242.0], [37.6, 242.0], [37.7, 242.0], [37.8, 242.0], [37.9, 242.0], [38.0, 242.0], [38.1, 242.0], [38.2, 242.0], [38.3, 243.0], [38.4, 243.0], [38.5, 243.0], [38.6, 243.0], [38.7, 243.0], [38.8, 243.0], [38.9, 243.0], [39.0, 243.0], [39.1, 243.0], [39.2, 243.0], [39.3, 243.0], [39.4, 243.0], [39.5, 243.0], [39.6, 243.0], [39.7, 243.0], [39.8, 243.0], [39.9, 243.0], [40.0, 243.0], [40.1, 243.0], [40.2, 243.0], [40.3, 243.0], [40.4, 243.0], [40.5, 243.0], [40.6, 243.0], [40.7, 243.0], [40.8, 243.0], [40.9, 243.0], [41.0, 244.0], [41.1, 244.0], [41.2, 244.0], [41.3, 244.0], [41.4, 244.0], [41.5, 244.0], [41.6, 244.0], [41.7, 244.0], [41.8, 244.0], [41.9, 244.0], [42.0, 244.0], [42.1, 244.0], [42.2, 244.0], [42.3, 244.0], [42.4, 244.0], [42.5, 244.0], [42.6, 244.0], [42.7, 244.0], [42.8, 244.0], [42.9, 244.0], [43.0, 244.0], [43.1, 244.0], [43.2, 244.0], [43.3, 244.0], [43.4, 245.0], [43.5, 245.0], [43.6, 245.0], [43.7, 245.0], [43.8, 245.0], [43.9, 245.0], [44.0, 245.0], [44.1, 245.0], [44.2, 245.0], [44.3, 245.0], [44.4, 245.0], [44.5, 245.0], [44.6, 245.0], [44.7, 245.0], [44.8, 245.0], [44.9, 245.0], [45.0, 245.0], [45.1, 246.0], [45.2, 246.0], [45.3, 246.0], [45.4, 246.0], [45.5, 246.0], [45.6, 246.0], [45.7, 246.0], [45.8, 246.0], [45.9, 246.0], [46.0, 246.0], [46.1, 246.0], [46.2, 246.0], [46.3, 246.0], [46.4, 246.0], [46.5, 246.0], [46.6, 246.0], [46.7, 246.0], [46.8, 246.0], [46.9, 246.0], [47.0, 246.0], [47.1, 246.0], [47.2, 246.0], [47.3, 247.0], [47.4, 247.0], [47.5, 247.0], [47.6, 247.0], [47.7, 247.0], [47.8, 247.0], [47.9, 247.0], [48.0, 247.0], [48.1, 247.0], [48.2, 247.0], [48.3, 247.0], [48.4, 247.0], [48.5, 247.0], [48.6, 247.0], [48.7, 247.0], [48.8, 248.0], [48.9, 248.0], [49.0, 248.0], [49.1, 248.0], [49.2, 248.0], [49.3, 248.0], [49.4, 248.0], [49.5, 248.0], [49.6, 248.0], [49.7, 248.0], [49.8, 248.0], [49.9, 248.0], [50.0, 248.0], [50.1, 248.0], [50.2, 248.0], [50.3, 248.0], [50.4, 248.0], [50.5, 248.0], [50.6, 248.0], [50.7, 248.0], [50.8, 249.0], [50.9, 249.0], [51.0, 249.0], [51.1, 249.0], [51.2, 249.0], [51.3, 249.0], [51.4, 249.0], [51.5, 249.0], [51.6, 249.0], [51.7, 249.0], [51.8, 249.0], [51.9, 249.0], [52.0, 249.0], [52.1, 249.0], [52.2, 249.0], [52.3, 249.0], [52.4, 249.0], [52.5, 250.0], [52.6, 250.0], [52.7, 250.0], [52.8, 250.0], [52.9, 250.0], [53.0, 250.0], [53.1, 250.0], [53.2, 250.0], [53.3, 250.0], [53.4, 250.0], [53.5, 250.0], [53.6, 250.0], [53.7, 250.0], [53.8, 251.0], [53.9, 251.0], [54.0, 251.0], [54.1, 251.0], [54.2, 251.0], [54.3, 251.0], [54.4, 251.0], [54.5, 251.0], [54.6, 251.0], [54.7, 251.0], [54.8, 251.0], [54.9, 251.0], [55.0, 251.0], [55.1, 252.0], [55.2, 252.0], [55.3, 252.0], [55.4, 252.0], [55.5, 252.0], [55.6, 252.0], [55.7, 252.0], [55.8, 252.0], [55.9, 252.0], [56.0, 252.0], [56.1, 253.0], [56.2, 253.0], [56.3, 253.0], [56.4, 253.0], [56.5, 253.0], [56.6, 253.0], [56.7, 253.0], [56.8, 253.0], [56.9, 253.0], [57.0, 253.0], [57.1, 254.0], [57.2, 254.0], [57.3, 254.0], [57.4, 254.0], [57.5, 254.0], [57.6, 254.0], [57.7, 255.0], [57.8, 255.0], [57.9, 255.0], [58.0, 255.0], [58.1, 255.0], [58.2, 255.0], [58.3, 255.0], [58.4, 255.0], [58.5, 255.0], [58.6, 255.0], [58.7, 256.0], [58.8, 256.0], [58.9, 256.0], [59.0, 256.0], [59.1, 256.0], [59.2, 256.0], [59.3, 256.0], [59.4, 257.0], [59.5, 257.0], [59.6, 257.0], [59.7, 257.0], [59.8, 257.0], [59.9, 257.0], [60.0, 257.0], [60.1, 257.0], [60.2, 257.0], [60.3, 257.0], [60.4, 258.0], [60.5, 258.0], [60.6, 258.0], [60.7, 258.0], [60.8, 258.0], [60.9, 258.0], [61.0, 258.0], [61.1, 258.0], [61.2, 258.0], [61.3, 259.0], [61.4, 259.0], [61.5, 259.0], [61.6, 259.0], [61.7, 259.0], [61.8, 259.0], [61.9, 259.0], [62.0, 259.0], [62.1, 259.0], [62.2, 260.0], [62.3, 260.0], [62.4, 260.0], [62.5, 260.0], [62.6, 260.0], [62.7, 260.0], [62.8, 261.0], [62.9, 261.0], [63.0, 261.0], [63.1, 261.0], [63.2, 261.0], [63.3, 261.0], [63.4, 261.0], [63.5, 261.0], [63.6, 262.0], [63.7, 262.0], [63.8, 262.0], [63.9, 262.0], [64.0, 262.0], [64.1, 262.0], [64.2, 262.0], [64.3, 263.0], [64.4, 263.0], [64.5, 263.0], [64.6, 263.0], [64.7, 263.0], [64.8, 263.0], [64.9, 263.0], [65.0, 263.0], [65.1, 264.0], [65.2, 264.0], [65.3, 264.0], [65.4, 264.0], [65.5, 264.0], [65.6, 264.0], [65.7, 264.0], [65.8, 265.0], [65.9, 265.0], [66.0, 265.0], [66.1, 265.0], [66.2, 265.0], [66.3, 265.0], [66.4, 265.0], [66.5, 265.0], [66.6, 265.0], [66.7, 265.0], [66.8, 266.0], [66.9, 266.0], [67.0, 266.0], [67.1, 266.0], [67.2, 267.0], [67.3, 267.0], [67.4, 267.0], [67.5, 267.0], [67.6, 267.0], [67.7, 267.0], [67.8, 267.0], [67.9, 267.0], [68.0, 267.0], [68.1, 268.0], [68.2, 268.0], [68.3, 268.0], [68.4, 268.0], [68.5, 268.0], [68.6, 268.0], [68.7, 268.0], [68.8, 269.0], [68.9, 269.0], [69.0, 269.0], [69.1, 269.0], [69.2, 269.0], [69.3, 270.0], [69.4, 270.0], [69.5, 270.0], [69.6, 270.0], [69.7, 270.0], [69.8, 270.0], [69.9, 271.0], [70.0, 271.0], [70.1, 271.0], [70.2, 271.0], [70.3, 271.0], [70.4, 271.0], [70.5, 271.0], [70.6, 271.0], [70.7, 272.0], [70.8, 272.0], [70.9, 272.0], [71.0, 272.0], [71.1, 272.0], [71.2, 273.0], [71.3, 273.0], [71.4, 273.0], [71.5, 273.0], [71.6, 273.0], [71.7, 274.0], [71.8, 274.0], [71.9, 274.0], [72.0, 275.0], [72.1, 275.0], [72.2, 275.0], [72.3, 275.0], [72.4, 275.0], [72.5, 275.0], [72.6, 275.0], [72.7, 275.0], [72.8, 276.0], [72.9, 276.0], [73.0, 276.0], [73.1, 276.0], [73.2, 276.0], [73.3, 277.0], [73.4, 277.0], [73.5, 278.0], [73.6, 278.0], [73.7, 278.0], [73.8, 278.0], [73.9, 279.0], [74.0, 279.0], [74.1, 279.0], [74.2, 280.0], [74.3, 280.0], [74.4, 280.0], [74.5, 280.0], [74.6, 280.0], [74.7, 280.0], [74.8, 281.0], [74.9, 281.0], [75.0, 281.0], [75.1, 281.0], [75.2, 281.0], [75.3, 282.0], [75.4, 282.0], [75.5, 282.0], [75.6, 283.0], [75.7, 283.0], [75.8, 283.0], [75.9, 283.0], [76.0, 283.0], [76.1, 283.0], [76.2, 283.0], [76.3, 284.0], [76.4, 284.0], [76.5, 284.0], [76.6, 285.0], [76.7, 285.0], [76.8, 285.0], [76.9, 285.0], [77.0, 285.0], [77.1, 286.0], [77.2, 286.0], [77.3, 286.0], [77.4, 287.0], [77.5, 287.0], [77.6, 287.0], [77.7, 288.0], [77.8, 288.0], [77.9, 288.0], [78.0, 289.0], [78.1, 289.0], [78.2, 289.0], [78.3, 290.0], [78.4, 290.0], [78.5, 290.0], [78.6, 290.0], [78.7, 290.0], [78.8, 291.0], [78.9, 291.0], [79.0, 292.0], [79.1, 292.0], [79.2, 292.0], [79.3, 293.0], [79.4, 294.0], [79.5, 295.0], [79.6, 296.0], [79.7, 297.0], [79.8, 297.0], [79.9, 298.0], [80.0, 299.0], [80.1, 300.0], [80.2, 300.0], [80.3, 300.0], [80.4, 302.0], [80.5, 303.0], [80.6, 303.0], [80.7, 304.0], [80.8, 304.0], [80.9, 305.0], [81.0, 307.0], [81.1, 307.0], [81.2, 307.0], [81.3, 309.0], [81.4, 309.0], [81.5, 309.0], [81.6, 310.0], [81.7, 310.0], [81.8, 311.0], [81.9, 312.0], [82.0, 313.0], [82.1, 313.0], [82.2, 315.0], [82.3, 316.0], [82.4, 316.0], [82.5, 317.0], [82.6, 318.0], [82.7, 320.0], [82.8, 323.0], [82.9, 324.0], [83.0, 326.0], [83.1, 329.0], [83.2, 333.0], [83.3, 336.0], [83.4, 339.0], [83.5, 340.0], [83.6, 341.0], [83.7, 341.0], [83.8, 354.0], [83.9, 355.0], [84.0, 358.0], [84.1, 361.0], [84.2, 363.0], [84.3, 370.0], [84.4, 373.0], [84.5, 374.0], [84.6, 375.0], [84.7, 376.0], [84.8, 376.0], [84.9, 376.0], [85.0, 377.0], [85.1, 377.0], [85.2, 377.0], [85.3, 377.0], [85.4, 378.0], [85.5, 378.0], [85.6, 378.0], [85.7, 378.0], [85.8, 378.0], [85.9, 379.0], [86.0, 379.0], [86.1, 379.0], [86.2, 380.0], [86.3, 380.0], [86.4, 381.0], [86.5, 381.0], [86.6, 382.0], [86.7, 382.0], [86.8, 382.0], [86.9, 383.0], [87.0, 383.0], [87.1, 384.0], [87.2, 384.0], [87.3, 385.0], [87.4, 385.0], [87.5, 385.0], [87.6, 385.0], [87.7, 385.0], [87.8, 386.0], [87.9, 386.0], [88.0, 386.0], [88.1, 386.0], [88.2, 386.0], [88.3, 387.0], [88.4, 387.0], [88.5, 387.0], [88.6, 387.0], [88.7, 388.0], [88.8, 388.0], [88.9, 388.0], [89.0, 388.0], [89.1, 389.0], [89.2, 389.0], [89.3, 390.0], [89.4, 390.0], [89.5, 390.0], [89.6, 390.0], [89.7, 390.0], [89.8, 391.0], [89.9, 391.0], [90.0, 391.0], [90.1, 391.0], [90.2, 392.0], [90.3, 392.0], [90.4, 392.0], [90.5, 393.0], [90.6, 393.0], [90.7, 394.0], [90.8, 394.0], [90.9, 394.0], [91.0, 395.0], [91.1, 395.0], [91.2, 396.0], [91.3, 396.0], [91.4, 396.0], [91.5, 396.0], [91.6, 397.0], [91.7, 397.0], [91.8, 397.0], [91.9, 398.0], [92.0, 398.0], [92.1, 399.0], [92.2, 400.0], [92.3, 400.0], [92.4, 401.0], [92.5, 402.0], [92.6, 402.0], [92.7, 402.0], [92.8, 403.0], [92.9, 404.0], [93.0, 406.0], [93.1, 406.0], [93.2, 406.0], [93.3, 406.0], [93.4, 407.0], [93.5, 407.0], [93.6, 408.0], [93.7, 408.0], [93.8, 408.0], [93.9, 410.0], [94.0, 411.0], [94.1, 412.0], [94.2, 412.0], [94.3, 413.0], [94.4, 413.0], [94.5, 414.0], [94.6, 414.0], [94.7, 415.0], [94.8, 415.0], [94.9, 416.0], [95.0, 417.0], [95.1, 417.0], [95.2, 418.0], [95.3, 418.0], [95.4, 419.0], [95.5, 419.0], [95.6, 420.0], [95.7, 423.0], [95.8, 424.0], [95.9, 427.0], [96.0, 429.0], [96.1, 430.0], [96.2, 431.0], [96.3, 433.0], [96.4, 435.0], [96.5, 437.0], [96.6, 438.0], [96.7, 439.0], [96.8, 440.0], [96.9, 446.0], [97.0, 449.0], [97.1, 450.0], [97.2, 452.0], [97.3, 458.0], [97.4, 463.0], [97.5, 464.0], [97.6, 466.0], [97.7, 466.0], [97.8, 471.0], [97.9, 472.0], [98.0, 476.0], [98.1, 477.0], [98.2, 478.0], [98.3, 481.0], [98.4, 484.0], [98.5, 487.0], [98.6, 491.0], [98.7, 493.0], [98.8, 495.0], [98.9, 498.0], [99.0, 509.0], [99.1, 514.0], [99.2, 527.0], [99.3, 543.0], [99.4, 555.0], [99.5, 559.0], [99.6, 579.0], [99.7, 594.0], [99.8, 874.0], [99.9, 1306.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 1518.0, "series": [{"data": [[300.0, 229.0], [600.0, 1.0], [1300.0, 2.0], [400.0, 129.0], [200.0, 1518.0], [800.0, 1.0], [900.0, 1.0], [500.0, 15.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 19.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1877.0, "series": [{"data": [[0.0, 1877.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 19.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.6451612903225805, "minX": 1.5385788E12, "maxY": 3.0, "series": [{"data": [[1.53857892E12, 3.0], [1.5385788E12, 2.6451612903225805], [1.53857898E12, 2.994475138121547], [1.53857886E12, 3.0]], "isOverall": false, "label": "ServerlessInvoke", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53857898E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 276.95628997867806, "minX": 1.0, "maxY": 633.4, "series": [{"data": [[1.0, 633.4], [2.0, 438.1333333333334], [3.0, 276.95628997867806]], "isOverall": false, "label": "Home Page", "isController": false}, {"data": [[2.986814345991566, 279.1714135021098]], "isOverall": false, "label": "Home Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 262.46666666666664, "minX": 1.5385788E12, "maxY": 5182.45, "series": [{"data": [[1.53857892E12, 5182.45], [1.5385788E12, 484.6333333333333], [1.53857898E12, 4244.45], [1.53857886E12, 4908.866666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.53857892E12, 2806.7], [1.5385788E12, 262.46666666666664], [1.53857898E12, 2298.7], [1.53857886E12, 2658.5333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53857898E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 267.12707182320435, "minX": 1.5385788E12, "maxY": 410.0161290322581, "series": [{"data": [[1.53857892E12, 270.4177978883861], [1.5385788E12, 410.0161290322581], [1.53857898E12, 267.12707182320435], [1.53857886E12, 285.90923566878905]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53857898E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 267.1123388581954, "minX": 1.5385788E12, "maxY": 410.00000000000006, "series": [{"data": [[1.53857892E12, 270.39668174962287], [1.5385788E12, 410.00000000000006], [1.53857898E12, 267.1123388581954], [1.53857886E12, 285.88057324840736]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53857898E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 118.17127071823207, "minX": 1.5385788E12, "maxY": 147.90322580645167, "series": [{"data": [[1.53857892E12, 122.17647058823532], [1.5385788E12, 147.90322580645167], [1.53857898E12, 118.17127071823207], [1.53857886E12, 124.36146496815294]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53857898E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 223.0, "minX": 1.5385788E12, "maxY": 1326.0, "series": [{"data": [[1.53857892E12, 904.0], [1.5385788E12, 1326.0], [1.53857898E12, 463.0], [1.53857886E12, 594.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.53857892E12, 223.0], [1.5385788E12, 237.0], [1.53857898E12, 225.0], [1.53857886E12, 226.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.53857892E12, 397.0], [1.5385788E12, 545.2], [1.53857898E12, 391.0], [1.53857886E12, 416.79999999999995]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.53857892E12, 544.8400000000001], [1.5385788E12, 1326.0], [1.53857898E12, 509.14999999999986], [1.53857886E12, 559.7200000000003]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.53857892E12, 433.5999999999999], [1.5385788E12, 558.7], [1.53857898E12, 417.0], [1.53857886E12, 471.44999999999993]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53857898E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 248.0, "minX": 1000.0, "maxY": 267.5, "series": [{"data": [[1000.0, 248.0], [2000.0, 267.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 2000.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 248.0, "minX": 1000.0, "maxY": 267.5, "series": [{"data": [[1000.0, 248.0], [2000.0, 267.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 2000.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.5385788E12, "maxY": 11.05, "series": [{"data": [[1.53857892E12, 11.05], [1.5385788E12, 1.0833333333333333], [1.53857898E12, 9.0], [1.53857886E12, 10.466666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53857898E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.0333333333333334, "minX": 1.5385788E12, "maxY": 11.05, "series": [{"data": [[1.53857892E12, 11.05], [1.5385788E12, 1.0333333333333334], [1.53857898E12, 9.05], [1.53857886E12, 10.466666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53857898E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.0333333333333334, "minX": 1.5385788E12, "maxY": 11.05, "series": [{"data": [[1.53857892E12, 11.05], [1.5385788E12, 1.0333333333333334], [1.53857898E12, 9.05], [1.53857886E12, 10.466666666666667]], "isOverall": false, "label": "Home Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53857898E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.0333333333333334, "minX": 1.5385788E12, "maxY": 11.05, "series": [{"data": [[1.53857892E12, 11.05], [1.5385788E12, 1.0333333333333334], [1.53857898E12, 9.05], [1.53857886E12, 10.466666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53857898E12, "title": "Total Transactions Per Second"}},
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

