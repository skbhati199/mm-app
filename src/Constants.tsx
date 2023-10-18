export const Colors = {
    primaryColor : "#206BB6",
    tabIconDefault: "#B8B8B8",
    tabBarBorderDefault:"#BBBBBB"
} 

export const RUPEE_SYMBOL = "₹"


// Create our number formatter.
export const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
  });