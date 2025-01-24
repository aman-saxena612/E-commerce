export const getPagination = (query: any) => {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const offset = (page - 1) * limit;
  
    return { page, limit, offset };
  };  