<script>
    export let pointA = { left: 40, top: 20 };  // Percentage-based positions
    export let pointB = { left: 70, top: 60 };
    export let color = "grey";  // Arrow color
    export let thickness = 1;  // Line thickness
    export let arrowSize = 5;  // Arrowhead size
    export let arrowStart = true;  // Show arrow at start
    export let arrowEnd = true;  // Show arrow at end
</script>

<svg class="arrow-svg">
    <defs>
        <marker id="arrowhead" markerWidth="{arrowSize * 2}" markerHeight="{arrowSize * 1.4}" 
            refX="{arrowSize * 2}" refY="{arrowSize * 0.7}" orient="auto">
            <polygon points="0 0, {arrowSize * 2} {arrowSize * 0.7}, 0 {arrowSize * 1.4}" fill={color} />
        </marker>
        <marker id="arrowhead-reverse" markerWidth="{arrowSize * 2}" markerHeight="{arrowSize * 1.4}" 
            refX="0" refY="{arrowSize * 0.7}" orient="auto">
            <polygon points="{arrowSize * 2} 0, 0 {arrowSize * 0.7}, {arrowSize * 2} {arrowSize * 1.4}" fill={color} />
        </marker>
    </defs>

    <line 
        x1="{pointA.left}%" y1="{pointA.top}%" 
        x2="{pointB.left}%" y2="{pointB.top}%" 
        stroke={color} stroke-width={thickness} 
        marker-start={arrowStart ? "url(#arrowhead-reverse)" : "none"} 
        marker-end={arrowEnd ? "url(#arrowhead)" : "none"} 
    />
</svg>

<style>
    .arrow-svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
</style>
