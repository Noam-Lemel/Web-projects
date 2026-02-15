let myVar=undefined;
let myVar2=null;
// כדי להשיג את הערך הבוליאני של המשתנים יש 2 אופציות

// אופציה ראשונה- שימוש בפונקציה Boolean
console.log(Boolean(myVar));
console.log(Boolean(myVar2));

// אופציה שנייה היא להשתמש פעמיים באופרטור NOT
//ואז הוא יהפוך לכן
console.log(!!myVar);
console.log(!!myVar2);