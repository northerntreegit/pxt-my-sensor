# My Sensor Extension

This extension provides blocks for working with a custom sensor on the micro:bit.

## Usage

### Basic Functions

- **Initialize sensor**: Set up the sensor for use
- **Read sensor value**: Get a reading from the sensor in different modes
- **Check if sensor is ready**: Verify the sensor is initialized

### Advanced Functions

- **Set sensitivity**: Adjust sensor sensitivity (1-10)
- **On value changed**: Run code when sensor detects changes

## Example

```blocks
mySensor.initialize()
basic.forever(function () {
    if (mySensor.isReady()) {
        basic.showNumber(mySensor.readValue(SensorMode.Normal))
    }
    basic.pause(500)
})
```

## License

MIT

#### Metadata (used for search, rendering)

* for PXT/microbit
