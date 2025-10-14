import {Locator, Page} from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'

export class UiHelper {
    static findElement(page: Page, locator: string): Locator
    {
        const isXpath = locator.trim().startsWith("//") || locator.trim().startsWith("(");
        return page.locator(isXpath ? `xpath=${locator}` : locator);
    }

    static readCsvData(filePath: string, rowNo: number)
    {
        const file = path.resolve(process.cwd(), filePath);
        const csvData = fs.readFileSync(file, 'utf-8');
        const records = parse(csvData, { columns: true, skip_empty_lines: true, bom: true, trim: true }) as any;


        if (!records[rowNo-1]) throw Error("No result found!");
        else
            return records[rowNo-1];
    }

}