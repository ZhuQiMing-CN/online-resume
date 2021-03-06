/*
 * @Author: ZhuQiMing
 * @CreateTime: 2019/10/17 14:09
 */
import html2canvas from 'html2canvas';
import JsPdF from 'jspdf';
import canvg from 'canvg';

// 下载PDF
export function downloadPDF (ele, username) {
    let eleW = ele.offsetWidth;// 获得该容器的宽
    let eleH = ele.offsetHeight;// 获得该容器的高

    let eleOffsetTop = ele.offsetTop; // 获得该容器到文档顶部的距离
    let eleOffsetLeft = ele.offsetLeft; // 获得该容器到文档最左的距离

    var canvas = document.createElement('canvas');
    var abs = 0;

    let winin = document.documentElement.clientWidth || document.body.clientWidth; // 获得当前可视窗口的宽度（不包含滚动条）
    let winout = window.innerWidth; // 获得当前窗口的宽度（包含滚动条）

    if (winout > winin) {
        // abs = (win_o - win_i)/2;    // 获得滚动条长度的一半
        abs = (winout - winin) / 2; // 获得滚动条宽度的一半
        // console.log(a, ‘新abs‘);
    }

    canvas.width = eleW * 2; // 将画布宽&&高放大两倍
    canvas.height = eleH * 2;

    var context = canvas.getContext('2d');

    context.scale(2, 2);

    context.translate(-eleOffsetLeft - abs, -eleOffsetTop);
    // 这里默认横向没有滚动条的情况，因为offset.left(),有无滚动条的时候存在差值，因此
    // translate的时候，要把这个差值去掉

    // 解决html2canvas截图不全的问题
    window.pageYOffset = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 以下是对svg的处理
    var svgElem = ele.querySelectorAll('svg');// 需要截取成图片的dom
    svgElem.forEach(node => {
        var parentNode = node.parentNode;
        var svg = node.outerHTML.trim();

        var canvas = document.createElement('canvas');
        canvas.width = 100;
        canvas.height = 100;
        canvas.style.width = '100px';
        canvas.style.height = '100px';
        canvg(canvas, svg);
        if (node.style.position) {
            canvas.style.position += node.style.position;
            canvas.style.left += node.style.left;
            canvas.style.top += node.style.top;
        }
        parentNode.removeChild(node);
        parentNode.appendChild(canvas);
    });

    html2canvas(ele, {
        dpi: 300,
        allowTaint: true, // 允许 canvas 污染， allowTaint参数要去掉，否则是无法通过toDataURL导出canvas数据的
        useCORS: true // 允许canvas画布内 可以跨域请求外部链接图片, 允许跨域请求。
        //   windowWidth: ele.scrollWidth,
        //   windowHeight: ele.scrollHeight
    }).then((canvas) => {
        var contentWidth = canvas.width;
        var contentHeight = canvas.height;
        // 一页pdf显示html页面生成的canvas高度;
        var pageHeight = contentWidth / 592.28 * 841.89;
        // 未生成pdf的html页面高度
        var leftHeight = contentHeight;
        // 页面偏移
        var position = 0;
        // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
        var imgWidth = 595.28;
        var imgHeight = 595.28 / contentWidth * contentHeight;

        var pageData = canvas.toDataURL('image/jpeg', 1.0);

        var pdf = new JsPdF('', 'pt', 'a4');

        // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
        // 当内容未超过pdf一页显示的范围，无需分页
        if (leftHeight < pageHeight) {
            // 在pdf.addImage(pageData, ‘JPEG‘, 左，上，宽度，高度)设置在pdf中显示；
            pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
            // pdf.addImage(pageData, ‘JPEG‘, 20, 40, imgWidth, imgHeight);
        } else { // 分页
            while (leftHeight > 0) {
                pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
                leftHeight -= pageHeight;
                position -= 841.89;
                // 避免添加空白页
                if (leftHeight > 0) {
                    pdf.addPage();
                }
            }
        }
        // 可动态生成
        pdf.save(`${username}.pdf`);
    });
}
// 计算周岁年龄
export function countAge (birthday) {
    let b = new Date(birthday);
    let d = new Date();

    let diff = {
        y: d.getFullYear() - b.getFullYear(),
        m: d.getMonth() - b.getMonth(),
        d: d.getDate() - b.getDate()
    };

    if (diff.d < 0) {
        diff.m--;
    }
    if (diff.m < 0) {
        diff.y--;
    }
    return diff.y;// 返回周岁年龄
}
