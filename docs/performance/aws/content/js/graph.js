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
        data: {"result": {"minY": 255.0, "minX": 0.0, "maxY": 1891.0, "series": [{"data": [[0.0, 255.0], [0.1, 255.0], [0.2, 256.0], [0.3, 256.0], [0.4, 256.0], [0.5, 257.0], [0.6, 258.0], [0.7, 258.0], [0.8, 258.0], [0.9, 258.0], [1.0, 258.0], [1.1, 258.0], [1.2, 259.0], [1.3, 259.0], [1.4, 259.0], [1.5, 259.0], [1.6, 259.0], [1.7, 259.0], [1.8, 259.0], [1.9, 259.0], [2.0, 260.0], [2.1, 260.0], [2.2, 260.0], [2.3, 260.0], [2.4, 260.0], [2.5, 260.0], [2.6, 260.0], [2.7, 260.0], [2.8, 260.0], [2.9, 260.0], [3.0, 260.0], [3.1, 260.0], [3.2, 261.0], [3.3, 261.0], [3.4, 261.0], [3.5, 261.0], [3.6, 261.0], [3.7, 261.0], [3.8, 261.0], [3.9, 261.0], [4.0, 261.0], [4.1, 261.0], [4.2, 261.0], [4.3, 261.0], [4.4, 262.0], [4.5, 262.0], [4.6, 262.0], [4.7, 262.0], [4.8, 262.0], [4.9, 262.0], [5.0, 262.0], [5.1, 262.0], [5.2, 262.0], [5.3, 262.0], [5.4, 262.0], [5.5, 262.0], [5.6, 262.0], [5.7, 262.0], [5.8, 262.0], [5.9, 262.0], [6.0, 262.0], [6.1, 262.0], [6.2, 262.0], [6.3, 262.0], [6.4, 263.0], [6.5, 263.0], [6.6, 263.0], [6.7, 263.0], [6.8, 263.0], [6.9, 263.0], [7.0, 263.0], [7.1, 263.0], [7.2, 263.0], [7.3, 263.0], [7.4, 263.0], [7.5, 263.0], [7.6, 263.0], [7.7, 263.0], [7.8, 263.0], [7.9, 263.0], [8.0, 263.0], [8.1, 263.0], [8.2, 263.0], [8.3, 263.0], [8.4, 263.0], [8.5, 263.0], [8.6, 264.0], [8.7, 264.0], [8.8, 264.0], [8.9, 264.0], [9.0, 264.0], [9.1, 264.0], [9.2, 264.0], [9.3, 264.0], [9.4, 264.0], [9.5, 264.0], [9.6, 264.0], [9.7, 264.0], [9.8, 264.0], [9.9, 264.0], [10.0, 264.0], [10.1, 264.0], [10.2, 264.0], [10.3, 264.0], [10.4, 264.0], [10.5, 264.0], [10.6, 264.0], [10.7, 265.0], [10.8, 265.0], [10.9, 265.0], [11.0, 265.0], [11.1, 265.0], [11.2, 265.0], [11.3, 265.0], [11.4, 265.0], [11.5, 265.0], [11.6, 265.0], [11.7, 265.0], [11.8, 265.0], [11.9, 265.0], [12.0, 265.0], [12.1, 265.0], [12.2, 265.0], [12.3, 265.0], [12.4, 265.0], [12.5, 265.0], [12.6, 265.0], [12.7, 265.0], [12.8, 265.0], [12.9, 265.0], [13.0, 265.0], [13.1, 265.0], [13.2, 265.0], [13.3, 265.0], [13.4, 266.0], [13.5, 266.0], [13.6, 266.0], [13.7, 266.0], [13.8, 266.0], [13.9, 266.0], [14.0, 266.0], [14.1, 266.0], [14.2, 266.0], [14.3, 266.0], [14.4, 266.0], [14.5, 266.0], [14.6, 266.0], [14.7, 266.0], [14.8, 266.0], [14.9, 266.0], [15.0, 266.0], [15.1, 266.0], [15.2, 266.0], [15.3, 266.0], [15.4, 266.0], [15.5, 266.0], [15.6, 266.0], [15.7, 266.0], [15.8, 266.0], [15.9, 266.0], [16.0, 266.0], [16.1, 266.0], [16.2, 266.0], [16.3, 266.0], [16.4, 266.0], [16.5, 266.0], [16.6, 267.0], [16.7, 267.0], [16.8, 267.0], [16.9, 267.0], [17.0, 267.0], [17.1, 267.0], [17.2, 267.0], [17.3, 267.0], [17.4, 267.0], [17.5, 267.0], [17.6, 267.0], [17.7, 267.0], [17.8, 267.0], [17.9, 267.0], [18.0, 267.0], [18.1, 267.0], [18.2, 267.0], [18.3, 267.0], [18.4, 267.0], [18.5, 267.0], [18.6, 267.0], [18.7, 267.0], [18.8, 267.0], [18.9, 267.0], [19.0, 267.0], [19.1, 267.0], [19.2, 267.0], [19.3, 267.0], [19.4, 267.0], [19.5, 267.0], [19.6, 267.0], [19.7, 267.0], [19.8, 268.0], [19.9, 268.0], [20.0, 268.0], [20.1, 268.0], [20.2, 268.0], [20.3, 268.0], [20.4, 268.0], [20.5, 268.0], [20.6, 268.0], [20.7, 268.0], [20.8, 268.0], [20.9, 268.0], [21.0, 268.0], [21.1, 268.0], [21.2, 268.0], [21.3, 268.0], [21.4, 268.0], [21.5, 268.0], [21.6, 268.0], [21.7, 268.0], [21.8, 268.0], [21.9, 268.0], [22.0, 269.0], [22.1, 269.0], [22.2, 269.0], [22.3, 269.0], [22.4, 269.0], [22.5, 269.0], [22.6, 269.0], [22.7, 269.0], [22.8, 269.0], [22.9, 269.0], [23.0, 269.0], [23.1, 269.0], [23.2, 269.0], [23.3, 269.0], [23.4, 269.0], [23.5, 269.0], [23.6, 269.0], [23.7, 269.0], [23.8, 269.0], [23.9, 269.0], [24.0, 269.0], [24.1, 269.0], [24.2, 269.0], [24.3, 269.0], [24.4, 269.0], [24.5, 269.0], [24.6, 269.0], [24.7, 269.0], [24.8, 269.0], [24.9, 270.0], [25.0, 270.0], [25.1, 270.0], [25.2, 270.0], [25.3, 270.0], [25.4, 270.0], [25.5, 270.0], [25.6, 270.0], [25.7, 270.0], [25.8, 270.0], [25.9, 270.0], [26.0, 270.0], [26.1, 270.0], [26.2, 270.0], [26.3, 270.0], [26.4, 270.0], [26.5, 270.0], [26.6, 270.0], [26.7, 270.0], [26.8, 270.0], [26.9, 270.0], [27.0, 270.0], [27.1, 270.0], [27.2, 270.0], [27.3, 270.0], [27.4, 270.0], [27.5, 270.0], [27.6, 270.0], [27.7, 270.0], [27.8, 270.0], [27.9, 271.0], [28.0, 271.0], [28.1, 271.0], [28.2, 271.0], [28.3, 271.0], [28.4, 271.0], [28.5, 271.0], [28.6, 271.0], [28.7, 271.0], [28.8, 271.0], [28.9, 271.0], [29.0, 271.0], [29.1, 271.0], [29.2, 271.0], [29.3, 271.0], [29.4, 271.0], [29.5, 271.0], [29.6, 271.0], [29.7, 271.0], [29.8, 271.0], [29.9, 271.0], [30.0, 271.0], [30.1, 271.0], [30.2, 271.0], [30.3, 271.0], [30.4, 271.0], [30.5, 271.0], [30.6, 271.0], [30.7, 272.0], [30.8, 272.0], [30.9, 272.0], [31.0, 272.0], [31.1, 272.0], [31.2, 272.0], [31.3, 272.0], [31.4, 272.0], [31.5, 272.0], [31.6, 272.0], [31.7, 272.0], [31.8, 272.0], [31.9, 272.0], [32.0, 272.0], [32.1, 272.0], [32.2, 272.0], [32.3, 272.0], [32.4, 272.0], [32.5, 272.0], [32.6, 272.0], [32.7, 272.0], [32.8, 272.0], [32.9, 272.0], [33.0, 272.0], [33.1, 272.0], [33.2, 273.0], [33.3, 273.0], [33.4, 273.0], [33.5, 273.0], [33.6, 273.0], [33.7, 273.0], [33.8, 273.0], [33.9, 273.0], [34.0, 273.0], [34.1, 273.0], [34.2, 273.0], [34.3, 273.0], [34.4, 273.0], [34.5, 273.0], [34.6, 273.0], [34.7, 273.0], [34.8, 273.0], [34.9, 273.0], [35.0, 273.0], [35.1, 273.0], [35.2, 273.0], [35.3, 273.0], [35.4, 273.0], [35.5, 273.0], [35.6, 273.0], [35.7, 273.0], [35.8, 273.0], [35.9, 274.0], [36.0, 274.0], [36.1, 274.0], [36.2, 274.0], [36.3, 274.0], [36.4, 274.0], [36.5, 274.0], [36.6, 274.0], [36.7, 274.0], [36.8, 274.0], [36.9, 274.0], [37.0, 274.0], [37.1, 274.0], [37.2, 274.0], [37.3, 274.0], [37.4, 274.0], [37.5, 274.0], [37.6, 274.0], [37.7, 274.0], [37.8, 274.0], [37.9, 274.0], [38.0, 274.0], [38.1, 274.0], [38.2, 274.0], [38.3, 275.0], [38.4, 275.0], [38.5, 275.0], [38.6, 275.0], [38.7, 275.0], [38.8, 275.0], [38.9, 275.0], [39.0, 275.0], [39.1, 275.0], [39.2, 275.0], [39.3, 275.0], [39.4, 275.0], [39.5, 275.0], [39.6, 275.0], [39.7, 275.0], [39.8, 275.0], [39.9, 275.0], [40.0, 275.0], [40.1, 275.0], [40.2, 275.0], [40.3, 275.0], [40.4, 275.0], [40.5, 275.0], [40.6, 275.0], [40.7, 275.0], [40.8, 275.0], [40.9, 275.0], [41.0, 276.0], [41.1, 276.0], [41.2, 276.0], [41.3, 276.0], [41.4, 276.0], [41.5, 276.0], [41.6, 276.0], [41.7, 276.0], [41.8, 276.0], [41.9, 276.0], [42.0, 276.0], [42.1, 276.0], [42.2, 276.0], [42.3, 276.0], [42.4, 276.0], [42.5, 276.0], [42.6, 276.0], [42.7, 276.0], [42.8, 276.0], [42.9, 276.0], [43.0, 276.0], [43.1, 276.0], [43.2, 276.0], [43.3, 276.0], [43.4, 276.0], [43.5, 276.0], [43.6, 276.0], [43.7, 276.0], [43.8, 277.0], [43.9, 277.0], [44.0, 277.0], [44.1, 277.0], [44.2, 277.0], [44.3, 277.0], [44.4, 277.0], [44.5, 277.0], [44.6, 277.0], [44.7, 277.0], [44.8, 277.0], [44.9, 277.0], [45.0, 277.0], [45.1, 277.0], [45.2, 277.0], [45.3, 277.0], [45.4, 277.0], [45.5, 277.0], [45.6, 277.0], [45.7, 278.0], [45.8, 278.0], [45.9, 278.0], [46.0, 278.0], [46.1, 278.0], [46.2, 278.0], [46.3, 278.0], [46.4, 278.0], [46.5, 278.0], [46.6, 278.0], [46.7, 278.0], [46.8, 278.0], [46.9, 278.0], [47.0, 278.0], [47.1, 278.0], [47.2, 278.0], [47.3, 278.0], [47.4, 278.0], [47.5, 278.0], [47.6, 278.0], [47.7, 278.0], [47.8, 278.0], [47.9, 278.0], [48.0, 279.0], [48.1, 279.0], [48.2, 279.0], [48.3, 279.0], [48.4, 279.0], [48.5, 279.0], [48.6, 279.0], [48.7, 279.0], [48.8, 279.0], [48.9, 279.0], [49.0, 279.0], [49.1, 279.0], [49.2, 279.0], [49.3, 279.0], [49.4, 279.0], [49.5, 279.0], [49.6, 279.0], [49.7, 279.0], [49.8, 279.0], [49.9, 279.0], [50.0, 279.0], [50.1, 279.0], [50.2, 279.0], [50.3, 280.0], [50.4, 280.0], [50.5, 280.0], [50.6, 280.0], [50.7, 280.0], [50.8, 280.0], [50.9, 280.0], [51.0, 280.0], [51.1, 280.0], [51.2, 280.0], [51.3, 280.0], [51.4, 280.0], [51.5, 280.0], [51.6, 280.0], [51.7, 280.0], [51.8, 280.0], [51.9, 280.0], [52.0, 280.0], [52.1, 280.0], [52.2, 280.0], [52.3, 280.0], [52.4, 281.0], [52.5, 281.0], [52.6, 281.0], [52.7, 281.0], [52.8, 281.0], [52.9, 281.0], [53.0, 281.0], [53.1, 281.0], [53.2, 281.0], [53.3, 281.0], [53.4, 281.0], [53.5, 281.0], [53.6, 281.0], [53.7, 281.0], [53.8, 281.0], [53.9, 281.0], [54.0, 281.0], [54.1, 281.0], [54.2, 281.0], [54.3, 281.0], [54.4, 281.0], [54.5, 281.0], [54.6, 281.0], [54.7, 281.0], [54.8, 282.0], [54.9, 282.0], [55.0, 282.0], [55.1, 282.0], [55.2, 282.0], [55.3, 282.0], [55.4, 282.0], [55.5, 282.0], [55.6, 282.0], [55.7, 282.0], [55.8, 282.0], [55.9, 282.0], [56.0, 282.0], [56.1, 282.0], [56.2, 282.0], [56.3, 282.0], [56.4, 282.0], [56.5, 282.0], [56.6, 282.0], [56.7, 282.0], [56.8, 282.0], [56.9, 283.0], [57.0, 283.0], [57.1, 283.0], [57.2, 283.0], [57.3, 283.0], [57.4, 283.0], [57.5, 283.0], [57.6, 283.0], [57.7, 283.0], [57.8, 283.0], [57.9, 283.0], [58.0, 283.0], [58.1, 283.0], [58.2, 283.0], [58.3, 283.0], [58.4, 283.0], [58.5, 283.0], [58.6, 283.0], [58.7, 283.0], [58.8, 283.0], [58.9, 284.0], [59.0, 284.0], [59.1, 284.0], [59.2, 284.0], [59.3, 284.0], [59.4, 284.0], [59.5, 284.0], [59.6, 284.0], [59.7, 284.0], [59.8, 284.0], [59.9, 284.0], [60.0, 284.0], [60.1, 284.0], [60.2, 284.0], [60.3, 284.0], [60.4, 284.0], [60.5, 284.0], [60.6, 284.0], [60.7, 284.0], [60.8, 285.0], [60.9, 285.0], [61.0, 285.0], [61.1, 285.0], [61.2, 285.0], [61.3, 285.0], [61.4, 285.0], [61.5, 285.0], [61.6, 285.0], [61.7, 285.0], [61.8, 285.0], [61.9, 285.0], [62.0, 285.0], [62.1, 285.0], [62.2, 285.0], [62.3, 285.0], [62.4, 285.0], [62.5, 285.0], [62.6, 285.0], [62.7, 285.0], [62.8, 286.0], [62.9, 286.0], [63.0, 286.0], [63.1, 286.0], [63.2, 286.0], [63.3, 286.0], [63.4, 286.0], [63.5, 286.0], [63.6, 286.0], [63.7, 286.0], [63.8, 286.0], [63.9, 286.0], [64.0, 286.0], [64.1, 286.0], [64.2, 286.0], [64.3, 286.0], [64.4, 286.0], [64.5, 286.0], [64.6, 286.0], [64.7, 286.0], [64.8, 287.0], [64.9, 287.0], [65.0, 287.0], [65.1, 287.0], [65.2, 287.0], [65.3, 287.0], [65.4, 287.0], [65.5, 287.0], [65.6, 287.0], [65.7, 287.0], [65.8, 287.0], [65.9, 287.0], [66.0, 287.0], [66.1, 287.0], [66.2, 287.0], [66.3, 287.0], [66.4, 288.0], [66.5, 288.0], [66.6, 288.0], [66.7, 288.0], [66.8, 288.0], [66.9, 288.0], [67.0, 288.0], [67.1, 288.0], [67.2, 288.0], [67.3, 288.0], [67.4, 288.0], [67.5, 288.0], [67.6, 288.0], [67.7, 288.0], [67.8, 288.0], [67.9, 288.0], [68.0, 288.0], [68.1, 288.0], [68.2, 288.0], [68.3, 288.0], [68.4, 289.0], [68.5, 289.0], [68.6, 289.0], [68.7, 289.0], [68.8, 289.0], [68.9, 289.0], [69.0, 289.0], [69.1, 289.0], [69.2, 289.0], [69.3, 289.0], [69.4, 289.0], [69.5, 289.0], [69.6, 289.0], [69.7, 290.0], [69.8, 290.0], [69.9, 290.0], [70.0, 290.0], [70.1, 290.0], [70.2, 290.0], [70.3, 290.0], [70.4, 290.0], [70.5, 290.0], [70.6, 290.0], [70.7, 290.0], [70.8, 290.0], [70.9, 290.0], [71.0, 290.0], [71.1, 290.0], [71.2, 291.0], [71.3, 291.0], [71.4, 291.0], [71.5, 291.0], [71.6, 291.0], [71.7, 291.0], [71.8, 291.0], [71.9, 291.0], [72.0, 291.0], [72.1, 291.0], [72.2, 291.0], [72.3, 291.0], [72.4, 291.0], [72.5, 291.0], [72.6, 291.0], [72.7, 292.0], [72.8, 292.0], [72.9, 292.0], [73.0, 292.0], [73.1, 292.0], [73.2, 292.0], [73.3, 292.0], [73.4, 292.0], [73.5, 292.0], [73.6, 292.0], [73.7, 292.0], [73.8, 292.0], [73.9, 293.0], [74.0, 293.0], [74.1, 293.0], [74.2, 293.0], [74.3, 293.0], [74.4, 293.0], [74.5, 293.0], [74.6, 293.0], [74.7, 293.0], [74.8, 293.0], [74.9, 293.0], [75.0, 294.0], [75.1, 294.0], [75.2, 294.0], [75.3, 294.0], [75.4, 294.0], [75.5, 294.0], [75.6, 294.0], [75.7, 294.0], [75.8, 294.0], [75.9, 294.0], [76.0, 294.0], [76.1, 294.0], [76.2, 294.0], [76.3, 294.0], [76.4, 294.0], [76.5, 294.0], [76.6, 294.0], [76.7, 294.0], [76.8, 295.0], [76.9, 295.0], [77.0, 295.0], [77.1, 295.0], [77.2, 295.0], [77.3, 295.0], [77.4, 295.0], [77.5, 295.0], [77.6, 295.0], [77.7, 295.0], [77.8, 295.0], [77.9, 295.0], [78.0, 295.0], [78.1, 296.0], [78.2, 296.0], [78.3, 296.0], [78.4, 296.0], [78.5, 296.0], [78.6, 296.0], [78.7, 296.0], [78.8, 296.0], [78.9, 296.0], [79.0, 296.0], [79.1, 296.0], [79.2, 296.0], [79.3, 296.0], [79.4, 297.0], [79.5, 297.0], [79.6, 297.0], [79.7, 297.0], [79.8, 297.0], [79.9, 297.0], [80.0, 297.0], [80.1, 297.0], [80.2, 297.0], [80.3, 297.0], [80.4, 297.0], [80.5, 297.0], [80.6, 297.0], [80.7, 298.0], [80.8, 298.0], [80.9, 298.0], [81.0, 298.0], [81.1, 298.0], [81.2, 298.0], [81.3, 298.0], [81.4, 298.0], [81.5, 298.0], [81.6, 298.0], [81.7, 298.0], [81.8, 299.0], [81.9, 299.0], [82.0, 299.0], [82.1, 299.0], [82.2, 299.0], [82.3, 299.0], [82.4, 299.0], [82.5, 299.0], [82.6, 299.0], [82.7, 300.0], [82.8, 300.0], [82.9, 300.0], [83.0, 300.0], [83.1, 300.0], [83.2, 300.0], [83.3, 300.0], [83.4, 300.0], [83.5, 301.0], [83.6, 301.0], [83.7, 301.0], [83.8, 301.0], [83.9, 301.0], [84.0, 301.0], [84.1, 302.0], [84.2, 302.0], [84.3, 302.0], [84.4, 302.0], [84.5, 303.0], [84.6, 303.0], [84.7, 303.0], [84.8, 303.0], [84.9, 303.0], [85.0, 303.0], [85.1, 304.0], [85.2, 304.0], [85.3, 304.0], [85.4, 304.0], [85.5, 304.0], [85.6, 304.0], [85.7, 304.0], [85.8, 305.0], [85.9, 305.0], [86.0, 305.0], [86.1, 305.0], [86.2, 305.0], [86.3, 305.0], [86.4, 305.0], [86.5, 305.0], [86.6, 305.0], [86.7, 306.0], [86.8, 306.0], [86.9, 306.0], [87.0, 306.0], [87.1, 306.0], [87.2, 306.0], [87.3, 306.0], [87.4, 306.0], [87.5, 307.0], [87.6, 307.0], [87.7, 307.0], [87.8, 307.0], [87.9, 307.0], [88.0, 307.0], [88.1, 308.0], [88.2, 308.0], [88.3, 308.0], [88.4, 309.0], [88.5, 309.0], [88.6, 309.0], [88.7, 310.0], [88.8, 310.0], [88.9, 310.0], [89.0, 310.0], [89.1, 310.0], [89.2, 310.0], [89.3, 310.0], [89.4, 310.0], [89.5, 312.0], [89.6, 312.0], [89.7, 312.0], [89.8, 312.0], [89.9, 312.0], [90.0, 312.0], [90.1, 313.0], [90.2, 313.0], [90.3, 313.0], [90.4, 315.0], [90.5, 315.0], [90.6, 316.0], [90.7, 316.0], [90.8, 316.0], [90.9, 316.0], [91.0, 317.0], [91.1, 318.0], [91.2, 318.0], [91.3, 318.0], [91.4, 319.0], [91.5, 319.0], [91.6, 319.0], [91.7, 320.0], [91.8, 321.0], [91.9, 321.0], [92.0, 321.0], [92.1, 321.0], [92.2, 322.0], [92.3, 322.0], [92.4, 323.0], [92.5, 323.0], [92.6, 323.0], [92.7, 324.0], [92.8, 325.0], [92.9, 325.0], [93.0, 325.0], [93.1, 325.0], [93.2, 327.0], [93.3, 327.0], [93.4, 327.0], [93.5, 328.0], [93.6, 328.0], [93.7, 328.0], [93.8, 329.0], [93.9, 330.0], [94.0, 331.0], [94.1, 332.0], [94.2, 333.0], [94.3, 335.0], [94.4, 336.0], [94.5, 337.0], [94.6, 339.0], [94.7, 339.0], [94.8, 339.0], [94.9, 341.0], [95.0, 341.0], [95.1, 342.0], [95.2, 345.0], [95.3, 345.0], [95.4, 346.0], [95.5, 347.0], [95.6, 348.0], [95.7, 349.0], [95.8, 350.0], [95.9, 351.0], [96.0, 353.0], [96.1, 355.0], [96.2, 357.0], [96.3, 358.0], [96.4, 360.0], [96.5, 362.0], [96.6, 362.0], [96.7, 370.0], [96.8, 370.0], [96.9, 377.0], [97.0, 381.0], [97.1, 384.0], [97.2, 385.0], [97.3, 385.0], [97.4, 392.0], [97.5, 406.0], [97.6, 424.0], [97.7, 440.0], [97.8, 467.0], [97.9, 483.0], [98.0, 499.0], [98.1, 525.0], [98.2, 532.0], [98.3, 549.0], [98.4, 570.0], [98.5, 639.0], [98.6, 653.0], [98.7, 667.0], [98.8, 689.0], [98.9, 738.0], [99.0, 799.0], [99.1, 806.0], [99.2, 883.0], [99.3, 1037.0], [99.4, 1084.0], [99.5, 1164.0], [99.6, 1207.0], [99.7, 1290.0], [99.8, 1419.0], [99.9, 1737.0], [100.0, 1891.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 1475.0, "series": [{"data": [[600.0, 6.0], [700.0, 4.0], [200.0, 1475.0], [800.0, 3.0], [900.0, 1.0], [1000.0, 3.0], [1100.0, 2.0], [300.0, 264.0], [1200.0, 3.0], [1300.0, 1.0], [1400.0, 2.0], [400.0, 10.0], [1700.0, 1.0], [1800.0, 1.0], [500.0, 8.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1749.0, "series": [{"data": [[0.0, 1749.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 33.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.956822107081175, "minX": 1.53852546E12, "maxY": 3.0, "series": [{"data": [[1.53852546E12, 2.956822107081175], [1.53852552E12, 3.0], [1.53852558E12, 2.994818652849741]], "isOverall": false, "label": "ServerlessInvoke", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53852558E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 295.16458569807054, "minX": 1.0, "maxY": 549.8333333333334, "series": [{"data": [[1.0, 549.8333333333334], [2.0, 378.74999999999994], [3.0, 295.16458569807054]], "isOverall": false, "label": "Home Page", "isController": false}, {"data": [[2.98430493273543, 296.7707399103136]], "isOverall": false, "label": "Home Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2451.1, "minX": 1.53852546E12, "maxY": 6093.066666666667, "series": [{"data": [[1.53852546E12, 5635.6], [1.53852552E12, 6093.066666666667], [1.53852558E12, 5635.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.53852546E12, 2451.1], [1.53852552E12, 2650.0666666666666], [1.53852558E12, 2451.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53852558E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 285.9984025559107, "minX": 1.53852546E12, "maxY": 306.7979274611396, "series": [{"data": [[1.53852546E12, 298.39032815198624], [1.53852552E12, 285.9984025559107], [1.53852558E12, 306.7979274611396]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53852558E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 285.9760383386582, "minX": 1.53852546E12, "maxY": 306.7858376511226, "series": [{"data": [[1.53852546E12, 298.35060449050064], [1.53852552E12, 285.9760383386582], [1.53852558E12, 306.7858376511226]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53852558E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 185.00159744408933, "minX": 1.53852546E12, "maxY": 189.0362694300519, "series": [{"data": [[1.53852546E12, 189.0362694300519], [1.53852552E12, 185.00159744408933], [1.53852558E12, 185.8290155440414]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53852558E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 255.0, "minX": 1.53852546E12, "maxY": 1891.0, "series": [{"data": [[1.53852546E12, 1737.0], [1.53852552E12, 883.0], [1.53852558E12, 1891.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.53852546E12, 258.0], [1.53852552E12, 256.0], [1.53852558E12, 255.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.53852546E12, 316.0], [1.53852552E12, 312.0], [1.53852558E12, 312.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.53852546E12, 699.8000000000027], [1.53852552E12, 551.8200000000002], [1.53852558E12, 800.0500000000006]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.53852546E12, 341.0], [1.53852552E12, 331.0], [1.53852558E12, 341.75]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53852558E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 275.0, "minX": 1000.0, "maxY": 289.5, "series": [{"data": [[3000.0, 275.0], [1000.0, 279.0], [2000.0, 289.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 3000.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 275.0, "minX": 1000.0, "maxY": 289.5, "series": [{"data": [[3000.0, 275.0], [1000.0, 279.0], [2000.0, 289.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 3000.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.5385254E12, "maxY": 10.433333333333334, "series": [{"data": [[1.53852546E12, 9.683333333333334], [1.53852552E12, 10.433333333333334], [1.53852558E12, 9.6], [1.5385254E12, 0.016666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53852558E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.65, "minX": 1.53852546E12, "maxY": 10.433333333333334, "series": [{"data": [[1.53852546E12, 9.65], [1.53852552E12, 10.433333333333334], [1.53852558E12, 9.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53852558E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.65, "minX": 1.53852546E12, "maxY": 10.433333333333334, "series": [{"data": [[1.53852546E12, 9.65], [1.53852552E12, 10.433333333333334], [1.53852558E12, 9.65]], "isOverall": false, "label": "Home Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53852558E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.65, "minX": 1.53852546E12, "maxY": 10.433333333333334, "series": [{"data": [[1.53852546E12, 9.65], [1.53852552E12, 10.433333333333334], [1.53852558E12, 9.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53852558E12, "title": "Total Transactions Per Second"}},
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

