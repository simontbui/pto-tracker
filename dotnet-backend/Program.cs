using Microsoft.EntityFrameworkCore;
using dotnet_backend.Data;
using Microsoft.Extensions.Configuration;

var MyCorsPolicy = "_MyCorsPolicy";
var builder = WebApplication.CreateBuilder(args);
//builder.Services.Configure<Jwt>(AppSettings.GetSection("Jwt"));

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyCorsPolicy,
        policy =>
        {
            policy.WithOrigins("http://localhost:3000")
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials();
        });
});

builder.Services.AddControllers();
//builder.Services.AddDbContext<PtoContext>(opt => 
//    opt.UseInMemoryDatabase("Departments"));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<PtoTrackerContext>();

AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(MyCorsPolicy);

app.UseAuthorization();

app.MapControllers();

app.Run();
