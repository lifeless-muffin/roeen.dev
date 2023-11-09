export function grained(ele, opt) {
    const element = typeof ele === 'string' ? document.getElementById(ele.split('#')[1]) : ele;
    
    if (!element) {
        console.error(`Grained: cannot find the element with id ${ele}`);
        return;
    }

    const elementId = element.id;
    const selectorElement = `#${elementId}::before`;

    if (element.style.position !== 'absolute') {
        element.style.position = 'relative';
    }
    element.style.overflow = 'hidden';

    const prefixes = ["", "-moz-", "-o-animation-", "-webkit-", "-ms-"];

    const defaultOptions = {
        animate: true,
        patternWidth: 100,
        patternHeight: 100,
        grainOpacity: 0.1,
        grainDensity: 1,
        grainWidth: 1,
        grainHeight: 1,
        grainChaos: 0.5,
        grainSpeed: 20
    };

    const options = { ...defaultOptions, ...opt };

    function generateNoise() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = options.patternWidth;
        canvas.height = options.patternHeight;
        for (let w = 0; w < options.patternWidth; w += options.grainDensity) {
            for (let h = 0; h < options.patternHeight; h += options.grainDensity) {
                const rgb = Math.random() * 256 | 0;
                ctx.fillStyle = `rgba(${rgb}, ${rgb}, ${rgb}, ${options.grainOpacity})`;
                ctx.fillRect(w, h, options.grainWidth, options.grainHeight);
            }
        }
        return canvas.toDataURL('image/png');
    }

    function addCSSRule(sheet, selector, rules, index) {
        let ins = '';
        if (selector.length) {
            ins = `${selector} { ${rules} }`;
        } else {
            ins = rules;
        }

        if ("insertRule" in sheet) {
            sheet.insertRule(ins, index);
        } else if ("addRule" in sheet) {
            sheet.addRule(selector, rules, index);
        }
    }

    const noise = generateNoise();
    let animation = '';
    const keyFrames = ['0%:-10%,10%', '10%:-25%,0%', '20%:-30%,10%', '30%:-30%,30%', '40%::-20%,20%', '50%:-15%,10%', '60%:-20%,20%', '70%:-5%,20%', '80%:-25%,5%', '90%:-30%,25%', '100%:-10%,10%'];

    let pre = prefixes.length;
    while (pre--) {
        animation += `@${prefixes[pre]}keyframes grained {`;
        for (let key = 0; key < keyFrames.length; key++) {
            const keyVal = keyFrames[key].split(':');
            animation += `${keyVal[0]} {`;
            animation += `${prefixes[pre]}transform: translate(${keyVal[1]});`;
            animation += '}';
        }
        animation += '}';
    }

    const animationAdded = document.getElementById('grained-animation');
    if (animationAdded) {
        animationAdded.parentElement.removeChild(animationAdded);
    }

    let style = document.createElement("style");
    style.type = "text/css";
    style.id = 'grained-animation';
    style.innerHTML = animation;
    document.body.appendChild(style);

    const styleAdded = document.getElementById(`grained-animation-${elementId}`);
    if (styleAdded) {
        styleAdded.parentElement.removeChild(styleAdded);
    }

    style = document.createElement("style");
    style.type = "text/css";
    style.id = `grained-animation-${elementId}`;
    document.body.appendChild(style);

    let rule = `background-image: url(${noise});`;
    rule += 'position: absolute;content: "";height: 300%;width: 300%;left: -100%;top: -100%;';
    pre = prefixes.length;
    if (options.animate) {
        while (pre--) {
            rule += `${prefixes[pre]}animation-name: grained;`;
            rule += `${prefixes[pre]}animation-iteration-count: infinite;`;
            rule += `${prefixes[pre]}animation-duration: ${options.grainChaos}s;`;
            rule += `${prefixes[pre]}animation-timing-function: steps(${options.grainSpeed}, end);`;
        }
    }

    addCSSRule(style.sheet, selectorElement, rule);
}

// Export the grained function
export default grained;