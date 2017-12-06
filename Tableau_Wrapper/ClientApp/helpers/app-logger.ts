export class AppLogger {
    log(msg: string): void {
        console.log(`${new Date().toISOString()} - ${msg}`);
    }
}