import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APPS_DIR = path.join(__dirname, '../Spixi-mini-APPs/apps');
const OUTPUT_FILE = path.join(__dirname, '../public/apps.json');

function parseAppInfo(text) {
    const lines = text.split(/\r?\n/);
    const info = {};
    for (const line of lines) {
        const match = line.match(/^\s*([^=]+?)\s*=\s*(.*?)\s*$/);
        if (match) {
            info[match[1]] = match[2];
        }
    }
    return info;
}

if (!fs.existsSync(APPS_DIR)) {
    console.error(`Apps directory not found: ${APPS_DIR}`);
    process.exit(1);
}

const apps = [];
const folders = fs.readdirSync(APPS_DIR);

console.log(`Scanning ${folders.length} folders...`);

for (const folder of folders) {
    const folderPath = path.join(APPS_DIR, folder);
    const appInfoPath = path.join(folderPath, 'appinfo.spixi');

    if (fs.statSync(folderPath).isDirectory() && fs.existsSync(appInfoPath)) {
        try {
            const content = fs.readFileSync(appInfoPath, 'utf8');
            const info = parseAppInfo(content);

            // Add some basic validation or enrichment if needed
            if (info.id && info.name) {
                apps.push({
                    id: info.id,
                    name: info.name,
                    version: info.version || '0.0.0',
                    description: info.description || '',
                    publisher: info.publisher || 'Unknown',
                    category: info.category || 'Utility',
                    icon: `apps/${folder}/icon.png` // Assuming relative path usage later
                });
            }
        } catch (e) {
            console.warn(`Failed to parse ${appInfoPath}: ${e.message}`);
        }
    }
}

const outputContent = JSON.stringify(apps, null, 4);
fs.writeFileSync(OUTPUT_FILE, outputContent);

console.log(`Generated ${OUTPUT_FILE} with ${apps.length} apps.`);
