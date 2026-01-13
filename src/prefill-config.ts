// Import type definitions
import type { PrefillConfig } from "./types";

/**
 * Prefill configuration for form fields.
 *
 * Example usage:
 * ```typescript
 * export const prefillConfig: PrefillConfig = {
 *   // Lock form type to Form 4 (readonly)
 *   q1_formType: { value: "ATF FORM 4", readonly: true },
 *
 *   // Prefill Q5 fields as editable defaults
 *   q5_agencyName: { value: "MY AGENCY", readonly: false },
 *   q5_officialName: { value: "JOHN DOE", readonly: false },
 *   q5_officialTitle: { value: "CEO", readonly: false },
 *   q5_address: { value: "123 MAIN ST\nANYTOWN, ST 12345", readonly: false },
 *
 *   // Lock UPIN question to "NO"
 *   q8_hasUpin: { value: "NO", readonly: true },
 * };
 * ```
 */
export const prefillConfig: PrefillConfig = {
  // Add your prefill configuration here
  // Example: q1_formType: { value: "ATF FORM 4", readonly: true },

  //Prefill Q1 Form Type as Form 4
  q1_formType: { value: "ATF FORM 4", readonly: false },

  //Prefill Q4 type to Silencer
  q4a_firearmType: { value: "SILENCER", readonly: false },

  // Prefill Q5 fields as editable defaults
  q5_agencyName: { value: "UTAH DEPARTMENT OF PUBLIC SAFETY", readonly: true },
  q5_officialName: { value: "BEAU MASON", readonly: true },
  q5_officialTitle: { value: "COMISSIONER", readonly: true },
  q5_address: { value: "4501 S 2700 W, SALT LAKE CITY, UT 84129, UNITED STATES", readonly: true },

  // Prefill Q6 fields to NO
  q6a_intent: { value: "NO", readonly: false},
  q6b_sell: { value: "NO", readonly: false},
  q6c_indictment: { value: "NO", readonly: false},
  q6d_convicted: { value: "NO", readonly: false},
  q6e_fugitive: { value: "NO", readonly: false},
  q6f_user: { value: "NO", readonly: false},
  q6g_mental: { value: "NO", readonly: false},
  q6h_dishonorable: { value: "NO", readonly: false},
  q6i_restraining: { value: "NO", readonly: false},
  q6j_domestic: { value: "NO", readonly: false},
  q6k_renounced: { value: "NO", readonly: false},
  q6l_illegal: { value: "NO", readonly: false},
  q6m1_nonimmigrant: { value: "NO", readonly: false},

  // Prefill Q8 UPIN to No
  q8_hasUpin: { value: "NO", readonly: false},

  // Prefill 9.a to USA
  q9a_citizenship: { value: "USA", readonly: false},

  // Prefill 9.c to USA
  q9c_birthCountry: { value: "USA", readonly: false},
};

// Also export as default for module compatibility
export default prefillConfig;
