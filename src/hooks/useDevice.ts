import { useState, useEffect } from "react";

export type DeviceType = "mobile" | "tablet" | "desktop";
export type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  deviceType: DeviceType;
  screenSize: ScreenSize;
  width: number;
  height: number;
}

const getScreenSize = (width: number): ScreenSize => {
  if (width < 640) return "xs";
  if (width < 768) return "sm";
  if (width < 1024) return "md";
  if (width < 1280) return "lg";
  if (width < 1536) return "xl";
  return "2xl";
};

const getDeviceType = (width: number): DeviceType => {
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
};

export const useDevice = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    deviceType: "desktop",
    screenSize: "2xl",
    width: 1920,
    height: 1080,
  });

  useEffect(() => {
    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const screenSize = getScreenSize(width);
      const deviceType = getDeviceType(width);

      setDeviceInfo({
        isMobile: deviceType === "mobile",
        isTablet: deviceType === "tablet",
        isDesktop: deviceType === "desktop",
        deviceType,
        screenSize,
        width,
        height,
      });
    };

    updateDeviceInfo();

    window.addEventListener("resize", updateDeviceInfo);

    return () => window.removeEventListener("resize", updateDeviceInfo);
  }, []);

  return deviceInfo;
};

export default useDevice;
