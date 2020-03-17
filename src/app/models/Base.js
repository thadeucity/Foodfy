const db = require ('../../config/db');

function find(filters, table) {
  try {
    let query = `SELECT * FROM ${table}`;

    if (filters){
      Object.keys(filters).map(key => {
        query += ` ${key}`;
    
        Object.keys(filters[key]).map(field => {
          query += ` ${field} = '${filters[key][field]}'`;
        });
      });
    }

    return db.query(query);

  } catch (err) {
    console.error(err);
  }
}

const Base = {
  init({ table }) {
    if(!table) throw new Error('Invalid Params');

    this.table = table;

    return this;
  },
  async create (fields){
    try{
      let keys = [],
          values = [];

      Object.keys(fields).map(key => {
        keys.push(key);
        values.push(`'${fields[key]}'`);
      });

      const query = `INSERT INTO ${this.table}
        (${keys.join(',')})
        VALUES (${values.join(',')})
        RETURNING id
      `

      const results = await db.query(query);
      return results.rows[0].id

    } catch (error){
      console.error(error);
    }
  },
  async update (id, fields){
    try{
      let update = [];

      Object.keys(fields).map(key => {
        update.push(`${key} = '${fields[key]}'`);
      });
  
      let query = `UPDATE ${this.table} SET
        ${update.join(',')}
        WHERE id = ${id}
      `;
  
      const results = await db.query(query);
      return results.rows[0].id;
      
    }catch (err){
      console.error(err);
    }
  },
  async findOne (id){
    const results = await find({ where: {id} }, this.table);
    return results.rows[0];
  },
  async findAll (filters){
    const results = await find(filters, this.table);
    return results.rows;
  },
  async linkFile(id, fileId){
    try {
      const str = this.table.slice(0, -1);
      const query = `
        INSERT INTO ${str}_files (
          ${str}_id,
          file_id
        ) VALUES ($1, $2)
        RETURNING id
      `;

      const values = [
        id,
        fileId
      ];

      const results = await db.query(query, values);
      return results.rows[0].id;
      
    } catch (err) {
      console.error(err);
    }
  },
  async delete (id){
    try {
      const query = `DELETE FROM ${this.table} WHERE id = $1`;
      await db.query(query, [id]);
      return;
      
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = Base;