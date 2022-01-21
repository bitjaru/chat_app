import { IMessage, IUser } from "@typings/db";
interface AbstractServer {
  getMessages(): Promise<IMessage[]>;

  sendImageFile(file: File): Promise<string>;
}

class FakeServer implements AbstractServer {
  getMessages(): Promise<IMessage[]> {
    return Promise.resolve([]);
  }

  sendImageFile(file: File): Promise<string> {
    return Promise.resolve("https");
  }
}

const server: AbstractServer = new FakeServer();
