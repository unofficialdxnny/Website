
import discord
from discord.ext import tasks
from discord.ext.commands import Bot
from discord import Member
from typing import Optional
from discord.ext import commands

intents = discord.Intents()
intents.message_content = True

client = commands.Bot(intents=intents, command_prefix="!")




@client.event
async def on_member_update(before, after):
    if str(before.status) == discord.Status.online:
        if str(after.status) == discord.Status.offline:
            print('offline')


client.run('MTAzNjA0MTg1Mjc2MTE2MTcyOA.Gnda_S.kksIYlHx5njkT4Kv-6Po9SHZLBqgk9nq3aDwkA')