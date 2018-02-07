/**
 * @author Anil.
 */
function makeCircle(left, top, line, line1, line2, line3, line4, line5) {
    var c = new fabric.Rect({
        left: left,
        top: top,
        width: 9,
        height: 9,
        opacity :0.5,
        fill: '#ccedf8',
    });
    c.hasControls = c.hasBorders = false;
    c.line = line;
    c.line1 = line1;
    c.line2 = line2;
    c.line3 = line3;
    c.line4 = line4;
    c.line5 = line5;

    return c;
}


function addPolygon(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6) {
    test_part_c=true;
    test_part_A=false;
    test_part_B=false;
    test_part_D=false;
    pol = new fabric.Polygon([
            {x: x1, y: y1},
            {x: x2, y: y2},
            {x: x3, y: y3},
            {x: x4, y: y4},
            {x: x5, y: y5},
            {x: x6, y: y6}

        ], {

            angle: 0,
            fill: '#ccedf8',
            strokeLineJoin: 'round',
            stroke: '#7f99ab',
            selectable: false

        }
    );
    return pol;
}

function addRectangleA_D_B(x1,y1,x2,y2,x3,y3,x4,y4) {
    test_part_c=false;
    test_part_A_B_D=true;
    pol = new fabric.Polygon([
            {x: x1, y: y1},
            {x: x2, y: y2},
            {x: x3, y: y3},
            {x: x4, y: y4}


        ], {

            angle: 0,
            fill: '#ccedf8',
            strokeLineJoin: 'round',
            stroke: '#7f99ab',
            selectable: false

        }
    );
    return pol;
}

function removePoints(){
    canvas.remove(points1, points2, points3, points4, points5, points6);
}

function makeLine(coords) {
    return new fabric.Line(coords, {
        fill: '#98a9ba',
        stroke: '#98a9ba',
        strokeWidth: 1,
        selectable: false
    });
}
function addText(text,left,top){
    var text = new fabric.Text(text, {
        fontSize: 30,
        left: left,
        top: top,
        lineHeight: 1,
        originX: 'left',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textBackgroundColor: '#fff',
        fill: '#98a9ba',
        selectable: false,
        scaleX: 0.4,
        scaleY: 0.4
    });
    return text;
}


