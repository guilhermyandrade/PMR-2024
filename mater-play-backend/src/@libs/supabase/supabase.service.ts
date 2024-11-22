import { Inject, Injectable } from '@nestjs/common'
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
    constructor (
        @Inject("SUPABASE_CLIENT")
        private readonly supabase: SupabaseClient
    ) {}

    async upload(file: any): Promise<any> {
        const { originalName, buffer } = file

//        const extensao  = originalName.split('.').slice(-1)[0]
//        originalName.substring(
//            originalName.lastIndexOf('.'),
//            String(originalName).length
//        )

        const { data, error } = await this.supabase.storage
            .from('mater-play')
            .upload(`movies/${Date.now()}_${originalName}`, buffer, {
                upsert: true
            })

        if (error) {
            throw error
        }

        return data
    }
}