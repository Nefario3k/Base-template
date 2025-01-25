
export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  const appResourceStore = useAppResourceStore(nuxtApp.$pinia);
  const accountInfoStore = userAccountInfoStore(nuxtApp.$pinia);
  //const { data, token, signOut, getSession } = useAuth();

  return {
    provide: {
      formatDate: (inputDate: string) => {
        if (
          inputDate === null ||
          inputDate === "00-00-00" ||
          inputDate === undefined ||
          inputDate === ""
        )
          return "Not available";

        const date = new Date(inputDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
      },
      formatCurrency: (num = 0, formatType = "USD", formatLang = "en-US") => {
        // if (num === null) return 'Not available'
        if (num === null) return "0";
        const formatter = new Intl.NumberFormat(formatLang, {
          style: "currency",
          currency: formatType,
          currencyDisplay: "symbol",
          minimumFractionDigits: 0, // No decimal places
          maximumFractionDigits: 2, // No decimal places
        });
        return formatter.format(num);
      },
      formatNumber: (num: any) => {
        if (num === null || num === undefined || num === "")
          return "Not available";
        const formatter = num.toLocaleString("en-US", {
          style: "decimal",
        });
        return formatter;
      },
      doNothing: () => { },
      getAppResource: (val: string) => appResourceStore[val],
      getAccountInfo: (val: string) => accountInfoStore[val],
      deepClone: (obj: any) => {
        // if statement to handle non object and array types 
        if (typeof obj !== "object" || obj === null) {
          return obj; // Handle primitive values
        }
        // handes arrays
        if (nuxtApp.$getType(obj) === 'array') {
          return obj.map(nuxtApp.$deepClone); // Recursively clone array elements
        }

        const clone: any = {};
        for (const key in obj) {
          if (key in obj) {
            clone[key] = nuxtApp.$deepClone(obj[key]); // Recursively clone object properties
          }
        }
        return clone;
      },
      getType: (value: any) => {
        const typeStr = typeof value;

        // Handle special cases for more precise typing
        if (typeStr === "object") {
          if (value === null) {
            return "null";
          } else if (Array.isArray(value)) {
            return "array";
          } else if (value instanceof Date) {
            return "date";
          } else if (value instanceof RegExp) {
            return "regexp";
          } else {
            return "object";
          }
        } else {
          return typeStr;
        }
      },
    },
  };
});
