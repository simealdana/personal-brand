import React from "react";
import { useTheme } from "../useTheme";
import { Span } from "../text/Span";
import { H3 } from "../heading";

export interface Step {
  id: string;
  label: string;
  title: string;
  items: string[];
  isCompleted?: boolean;
}

export interface ProgressStepsProps {
  steps: Step[];
  currentStep?: number;
  showTimeline?: boolean;
  className?: string;
  itemIcon?: React.ReactNode;
  itemClassName?: string;
}

export const ProgressSteps: React.FC<ProgressStepsProps> = ({
  steps,
  currentStep = 2,
  showTimeline = true,
  className = "",
  itemIcon,
  itemClassName = "",
}) => {
  const { colors } = useTheme();

  return (
    <div className={`w-full ${className}`}>
      {showTimeline && (
        <div className="relative mb-12">
          <div className="relative">
            <div className="relative flex justify-between">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center flex-1"
                >
                  <div
                    className="px-4 py-2 rounded-lg text-sm font-medium mb-4"
                    style={{
                      height: "42px",
                      width: "min(115px, 100%)",
                      backgroundColor:
                        index < currentStep ? "transparent" : colors.bgTertiary,
                      color:
                        index < currentStep
                          ? colors.textPrimary
                          : colors.outlineGray,
                      border: `.5px solid ${
                        index < currentStep
                          ? colors.textPrimary
                          : colors.outlineGray
                      }`,
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: "500",
                      lineHeight: "1.2",
                      textAlign: "center",
                      wordBreak: "break-word",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <H3>{step.label}</H3>
                  </div>

                  <div className="flex items-center w-full">
                    <div
                      className="flex-1"
                      style={{
                        backgroundColor:
                          index > 0 ? colors.borderGray : "transparent",
                        height: "0.5px",
                      }}
                    ></div>
                    <div className="flex justify-center">
                      <div
                        key={step.id}
                        className="w-4 h-4 rounded-full border-2 transition-all duration-300 flex-shrink-0"
                        style={{
                          backgroundColor:
                            index < currentStep
                              ? colors.white
                              : colors.textSecondary,
                          borderColor:
                            index < currentStep
                              ? colors.textSecondary
                              : colors.borderGray,
                        }}
                      ></div>
                    </div>
                    <div
                      className="flex-1"
                      style={{
                        backgroundColor:
                          index < steps.length - 1
                            ? colors.borderGray
                            : "transparent",
                        height: "0.5px",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="text-center lg:text-left">
            <div
              className="p-6 rounded-lg border-2 bg-white shadow-sm"
              style={{
                borderColor: colors.borderGray,
                borderWidth: "0.5px",
              }}
            >
              <h3
                className="mb-4 font-bold text-lg"
                style={{ color: colors.textPrimary }}
              >
                {step.title}
              </h3>
              <ul className="space-y-3">
                {step.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`flex items-start gap-3 text-sm ${itemClassName}`}
                    style={{
                      color: colors.textSecondary,
                    }}
                  >
                    {itemIcon && (
                      <Span
                        className="flex-shrink-0 mt-0.5"
                        color={colors.textSecondary}
                      >
                        {itemIcon}
                      </Span>
                    )}
                    <Span color={colors.textSecondary}>{item}</Span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps;
