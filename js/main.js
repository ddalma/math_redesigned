jQuery(document).ready(function ($) {

            var _CaptionTransitions = [];
            _CaptionTransitions["CLIP|B"] = {$Duration:500,$FlyDirection:8,$Easing:{$Top:$JssorEasing$.$EaseInOutSine},$ScaleVertical:0.03,$Opacity:2};

            var options = {
                $CaptionSliderOptions: {
                    $Class: $JssorCaptionSlider$,
                    $CaptionTransitions: _CaptionTransitions,
                    $PlayInMode: 1,
                    $PlayOutMode: 3
                },
                $DragOrientation: 3,                     //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
                $ArrowNavigatorOptions: {                //[Optional] Options to specify and enable arrow navigator or not
                    $Class: $JssorArrowNavigator$,       //[Requried] Class to create arrow navigator instance
                    $ChanceToShow: 2,                    //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $AutoCenter: 0,                      //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    $Steps: 1                            //[Optional] Steps to go for each navigation request, default value is 1
                }
            };

            var jssor_slider1 = new $JssorSlider$("carousel", options);
});



