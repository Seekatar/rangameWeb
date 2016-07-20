        function point(x,y)
        {
            this.x = x;
            this.y = y;
        }
        var vertices = new Array()
        for (i = 0; i < 20; i++) {
            vertices.push(new point(0, 0))
        }

        var k = 0;
        var fillStyle = $('#fgcolor')[0].value;
        var sides = parseInt($('#sides')[0].value);
        var backFillStyle = $('#bgcolor')[0].value;
        var points = parseInt($('#points')[0].value);

        (function ($) {
            $('#canvas').click(function (e) {
                var ctx = this.getContext("2d");

                if (k < sides) {
                    var x = e.pageX - this.offsetLeft
                    var y = e.pageY - this.offsetTop
                    var i = x + 1
                    var j = y + 1
                    ctx.fillRect(x, y, 2, 2);

                    vertices[k].x = x;
                    vertices[k].y = y;
                    k += 1;
                    $('#status').text((sides - k).toString() + " to go");
                }

                if (k >= sides) {
                    $('#status').text("Press Plot!");
                    $('button').removeAttr("disabled")
                    $('#plot').click(function () {
                        ctx.fillStyle = fillStyle
                        var nx = Math.floor(Math.random() * $('#canvas').width())
                        var ny = Math.floor(Math.random() * $('#canvas').height())
                        $('#status').text("Plotting...")
                        for (var i = 0; i < points; i++) {
                            var q = Math.floor(Math.random() * 3);
                            nx = Math.abs((vertices[q].x + nx) / 2)
                            ny = Math.abs((vertices[q].y + ny) / 2)
                            ctx.fillRect(nx, ny, 1, 1)
                        }
                        $('#status').show().text("Plotted " + points + " points").fadeOut(1000)
                    })
                    $('#reset').click(function () {
                        k = 0;
                        ctx.clearRect(0, 0, $('#canvas').width(), $('#canvas').height())
                        this["disabled"] = "disabled"
                        $("#plot").attr("disabled", "disabled")
                        $('#status').show().text("Click a point")
                    })
                }
            });
        })(jQuery);
