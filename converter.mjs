// Uso: node converter.mjs magias.txt   ->  gera magias.json (opcional; o site também lê magias.txt direto)
import fs from 'fs';
const html = fs.readFileSync(new URL('./index.html', import.meta.url), 'utf8');
const code = html.split('// @@PARSER-START')[1].split('// @@PARSER-END')[0];
const parse = new Function(code + '; return parseSiteText;')();
const list = parse(fs.readFileSync(process.argv[2] || 'magias.txt', 'utf8'));
fs.writeFileSync('magias.json', JSON.stringify(list));
console.log(list.length + ' magias -> magias.json');
