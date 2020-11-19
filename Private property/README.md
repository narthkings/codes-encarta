## Private property

**Problem:**
```javascript
/**
Create a "private property" called `secret` so that is accessible only from a privileged method called `getSecret` 
 and mutable by a privileged method called `setSecret`.
*/

x.secret // undefined
x.getSecret() // 'Our secret' (or whatever value the secret has)
x.setSecret('shhhhh')
x.getSecret() // 'shhhhh'
```

