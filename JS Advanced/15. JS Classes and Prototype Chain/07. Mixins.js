function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace);
        }
        classToExtend.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4);
        }
        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        }
    }
    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            let firstCheck = this.manufacturer === this.keyboard.manufacturer;
            if (firstCheck) {
                return this.monitor.manufacturer === this.keyboard.manufacturer;
            }
            return false;
        }
        classToExtend.prototype.isClassy = function () {
            return this.battery.expectedLife >= 3 &&
                (this.color === "Silver" || this.color === "Black") &&
                this.weight < 3;
        }
    }
    return {
        computerQualityMixin,
        styleMixin
    }
}