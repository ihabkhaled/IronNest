import securityPlugin from "eslint-plugin-security";

const recommendedSecurityRules = Object.fromEntries(
  Object.entries(securityPlugin.configs.recommended.rules).map(
    ([ruleId, setting]) => [
      ruleId,
      Array.isArray(setting) ? ["error", ...setting.slice(1)] : "error",
    ],
  ),
);

export default {
  files: ["**/*.ts"],
  plugins: {
    security: securityPlugin,
  },
  rules: {
    // Enable the plugin's recommended risky JavaScript pattern checks.
    ...recommendedSecurityRules,
    // Flag dynamic object access that can hide injection risks.
    "security/detect-object-injection": "error",
  },
};
