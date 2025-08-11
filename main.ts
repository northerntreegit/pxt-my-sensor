/**
 * Custom sensor extension for micro:bit
 */
//% color=#FF6600 weight=100 icon="\uf085" block="My Sensor"
//% groups=['Basic', 'Advanced']
namespace mySensor {

    export enum SensorMode {
        //% block="normal"
        Normal = 1,
        //% block="fast"
        Fast = 2,
        //% block="precise"
        Precise = 3
    }

    let isInitialized = false;

    /**
     * Initialize the sensor
     */
    //% block="initialize sensor"
    //% weight=100
    //% group="Basic"
    export function initialize(): void {
        // 初始化传感器
        isInitialized = true;
        basic.showString("INIT");
    }

    /**
     * Read sensor value
     * @param mode the sensor reading mode
     */
    //% block="read sensor in $mode mode"
    //% weight=90
    //% group="Basic"
    export function readValue(mode: SensorMode): number {
        if (!isInitialized) {
            basic.showString("ERR");
            return -1;
        }
        
        // 模拟读取传感器数值
        let value = 0;
        switch (mode) {
            case SensorMode.Normal:
                value = randint(0, 100);
                break;
            case SensorMode.Fast:
                value = randint(0, 50);
                break;
            case SensorMode.Precise:
                value = randint(80, 120);
                break;
        }
        return value;
    }

    /**
     * Set sensor sensitivity
     * @param sensitivity the sensitivity value from 1 to 10
     */
    //% block="set sensor sensitivity to $sensitivity"
    //% sensitivity.min=1 sensitivity.max=10 sensitivity.defl=5
    //% weight=80
    //% group="Advanced"
    export function setSensitivity(sensitivity: number): void {
        // 设置传感器灵敏度
        if (sensitivity < 1) sensitivity = 1;
        if (sensitivity > 10) sensitivity = 10;
        
        basic.showNumber(sensitivity);
    }

    /**
     * Check if sensor is ready
     */
    //% block="sensor is ready?"
    //% weight=70
    //% group="Basic"
    export function isReady(): boolean {
        return isInitialized;
    }

    /**
     * Run code when sensor value changes
     * @param handler the code to run when sensor value changes
     */
    //% block="on sensor value changed"
    //% weight=60
    //% group="Advanced"
    export function onValueChanged(handler: () => void): void {
        // 模拟传感器值变化事件
        basic.forever(() => {
            basic.pause(1000);
            if (isInitialized && randint(0, 10) > 7) {
                handler();
            }
        });
    }
}
