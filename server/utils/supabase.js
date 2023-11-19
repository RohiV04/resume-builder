const { createClient } = require('@supabase/supabase-js')
require('dotenv').config();
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
//export supabase
module.exports = supabase;