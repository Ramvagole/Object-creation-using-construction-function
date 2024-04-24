function iPhone3(ASIN, color, display, camera, bluetooth) {
    // Initialize properties
    this.ASIN = ASIN;
    this.color = color;
    this.display = display;
    this.camera = camera;
    this.bluetooth = bluetooth;
  
    // Define methods
    this.dial = function() {
      return "tring.. tring...";
    };
  
    this.sendMessage = function() {
      return "Sending message...";
    };
  
    this.cameraClick = function() {
      return "Camera clicked";
    };
  
    this.connectBluetooth = function() {
      return "Bluetooth connected successfully...";
    };
  }
  
  // Example usage
  let i3 = {};
  iPhone3.call(i3, "B09X67JBQV", "Gray", 7.8, "2.0 MP", "Bluetooth 5.1");
  
  // Properties
  console.log(i3.ASIN); // Output: B09X67JBQV
  console.log(i3.color); // Output: Gray
  console.log(i3.display); // Output: 7.8
  console.log(i3.camera); // Output: 2.0 MP
  console.log(i3.bluetooth); // Output: Bluetooth 5.1
  
  // Methods
  console.log(i3.dial()); // Output: "tring.. tring..."
  console.log(i3.sendMessage()); // Output: "Sending message..."
  console.log(i3.cameraClick()); // Output: "Camera clicked"
  console.log(i3.connectBluetooth()); // Output: "Bluetooth connected successfully..."
  