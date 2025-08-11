// 测试我们的传感器扩展
mySensor.initialize();

// 测试基本功能
if (mySensor.isReady()) {
    let value = mySensor.readValue(mySensor.SensorMode.Normal);
    basic.showNumber(value);
}

// 测试灵敏度设置
mySensor.setSensitivity(7);

// 测试事件处理
mySensor.onValueChanged(() => {
    basic.showIcon(IconNames.Heart);
    basic.pause(200);
    basic.clearScreen();
});
