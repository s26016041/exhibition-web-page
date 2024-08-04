<template>
    <div class="draggable" ref="container" @mousedown="startDrag" :style="containerStyle">
        <img :src="DollImgSrc" alt="Dynamic GIF" class="DollImg" />
    </div>
</template>
  
<script>
export default {
    name: 'DollImg',
    props: {
        DollImgSrc: {
            type: String,
            required: true
        },
        setX: {
            type: Number,
            required: true
        },
        setY: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            dragging: false,
            startX: 0,
            startY: 0,
            startLeft: 0,
            startTop: 0,
            offsetX: this.setX,
            offsetY: this.setY
        };
    },
    computed: {
        containerStyle() {
            return {
                transform: `translate(${this.offsetX}px, ${this.offsetY}px)`,
                position: 'absolute',
                cursor: this.dragging ? 'grabbing' : 'grab'
            };
        }
    },
    methods: {
        startDrag(event) {
            if (event.button === 0) { // 左键点击
                this.dragging = true;
                this.startX = event.clientX;
                this.startY = event.clientY;
                this.startLeft = this.offsetX;
                this.startTop = this.offsetY;
                document.addEventListener('mousemove', this.drag);
                document.addEventListener('mouseup', this.stopDrag);
            }
        },
        drag(event) {
            if (this.dragging) {
                const dx = event.clientX - this.startX;
                const dy = event.clientY - this.startY;
                this.offsetX = this.startLeft + dx;
                this.offsetY = this.startTop + dy;
            }
        },
        stopDrag() {
            this.dragging = false;
            document.removeEventListener('mousemove', this.drag);
            document.removeEventListener('mouseup', this.stopDrag);
        }
    }
};
</script>
  
<style>
.draggable {
    display: inline-block;
    cursor: grab;
    position: relative;
}

.DollImg {
    display: block;
    width: 100%;
    height: auto;
}
</style>
  