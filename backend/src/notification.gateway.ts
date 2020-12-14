import { OnModuleInit } from '@nestjs/common';
import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    OnGatewayConnection,
    OnGatewayDisconnect
} from '@nestjs/websockets';

@WebSocketGateway()
export class NotificationGateway implements OnModuleInit {

    onModuleInit() {
        console.log('started ----------------');
    }

    @WebSocketServer() server;
    users: number = 0;

    @SubscribeMessage('chat')
    async onChat(client, message) {
        client.broadcast.emit('chat', message);
    }

}