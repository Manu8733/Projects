# Building Automation Project

## Overview

This project implements **complete automation of lighting and ventilation systems** within a building, featuring dual control: software (desktop application) and physical sensors. The solution is user-friendly, scalable, and can be replicated both in simulation and on real hardware.

## Key Features

- Combined automation: **manual and automatic control** based on real temperature measurements.
- Desktop application with an intuitive interface developed in **C# Windows Forms**.
- Hardware simulation in **Tinkercad** using Arduino Uno, LEDs, DC motor, and TMP36 temperature sensor.
- Communication between the application and Arduino board via serial port.
- Easily extendable with additional sensors (CO₂, humidity, alarms, etc.).
- Real-time feedback: temperature data is sent back to the app (e.g., `T:22.3`).
- Dual control commands:
  - Lighting ON/OFF (`L1` / `L0`)
  - Fan ON/OFF (`V1` / `V0`)
  - Command `VA` to switch back to automatic control

## Hardware Components

- Arduino Uno
- 2 LEDs (lighting and ventilation indicators)
- DC motor (fan)
- TMP36 temperature sensor
- NPN transistor + 1N4007 diode for motor control
- 2 buttons with resistors for manual input
- Breadboard and connecting wires

## Functionality

- The system automatically regulates lighting and ventilation based on temperature readings.
- The user can manually override controls via the application or physical buttons.
- The system returns to automatic control when the `VA` command is received.
- Temperature data is sent back to the desktop app for monitoring.

## Limitations

- Motor simulation in Tinkercad is not fully realistic, but the software logic works correctly.
- Full integration on physical hardware is possible and recommended for real testing.

## Installation and Usage

1. Open the schematic and simulation in Tinkercad (add the project link here).
2. Upload the Arduino code to the physical board or run the simulation.
3. Launch the Windows Forms desktop application.
4. Connect the Arduino via the serial port.
5. Control the system through the app interface:
   - Buttons for lighting and fan control
   - Switch between automatic and manual modes
   - View the current temperature readings

## Possible Extensions

- Add sensors for CO₂, humidity, or alarms for advanced monitoring.
- Integrate with IoT platforms for remote control.
- Adapt the interface for mobile or other platforms.

## Author
Bejerea Emanuel  
3rd-year student – Automation and Applied Informatics  
Faculty of Automation and Computers
