---
title: IDEA 快捷键
date: 2016-12-15
tags:
 - IDEA
categories:
 - Tools
---

```html
<el-table-column
    type="index"
    width="50"
    :index="handleIndex"    
></el-table-column>
```

```javascript
handleIndex(index) {
  return (this.pageNo - 1) * this.pageSize + (index + 1);
}
```
